package com.nexus.backend.security;

import java.util.Arrays;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.nexus.backend.repository.CustomUserDetailsService;

@Configuration
@EnableWebSecurity

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
@Autowired
private DataSource dataSource;

@Bean
public UserDetailsService userDetailsService() {
	return new CustomUserDetailsService();
}
@Bean
public BCryptPasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
}
@Bean
public DaoAuthenticationProvider authenticationProvider() {
	DaoAuthenticationProvider authprovider = new DaoAuthenticationProvider();
	authprovider.setUserDetailsService(userDetailsService());
	authprovider.setPasswordEncoder(passwordEncoder());
	return authprovider;
}

@Override
public void configure(AuthenticationManagerBuilder auth) throws Exception {
	auth.authenticationProvider(authenticationProvider());
	
  
   }

    
 @Override
protected void configure(HttpSecurity http) throws Exception {
http.cors().and().csrf().disable();
//.antMatchers("/api/v1/login").permitAll()
//.antMatchers("/api/v1/register").permitAll().anyRequest().authenticated().and().formLogin();

http.httpBasic().and().authorizeRequests()
	.antMatchers("/api/v1/login", "/api/v1/register", "/api/v1/user_devices", "/api/v1/user_devices/:id").permitAll()
	.anyRequest().authenticated();
        
    }
    
    
   
}

//@Override
//	public UserDetailsService userDetailsServiceBean() {
//		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//		manager.createUser(User.withUsername("admin").password("admin").roles("ADMIN").build());
//		return manager;
//}
	
	