package com.nexus.backend.security;

import java.util.Arrays;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
@EnableWebSecurity

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
@Autowired
DataSource dataSource;

@Autowired
public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
    auth.jdbcAuthentication()
   // .passwordEncoder(getPasswordEncoder())
    .dataSource(dataSource);
    }
//Commented out the password encoder its giving me errors.
// 7/20/22 Security verifies role and password based on user name, and restricts acess

//@Autowired
//public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//  auth.inMemoryAuthentication()
//      .withUser("admin")
//      .password("password")
//      .authorities("USER");
//}
	
    
    	@Override
    	protected void configure(HttpSecurity http) throws Exception {
//    		http.
//    				authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated()
//    				.and().httpBasic();
    		
 		http.cors().and().csrf().disable().authorizeRequests()
  		.antMatchers("/**").permitAll().anyRequest().anonymous().and().httpBasic();
    	
    		
    		
        
    }
    
    @Bean
    public PasswordEncoder getPasswordEncoder() {
    	return NoOpPasswordEncoder.getInstance();
    }
    
   
}

//@Override
//	public UserDetailsService userDetailsServiceBean() {
//		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//		manager.createUser(User.withUsername("admin").password("admin").roles("ADMIN").build());
//		return manager;
//}
	
	