package com.nexus.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.exception.ResourceNotFoundException;
import com.nexus.backend.model.User;
import com.nexus.backend.repository.UserRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
/**
 * API USED IN THIS CONTROLLER
 * API: http://localhost:8080/api/v1/users TESTED WITH GET, POST
 * API: http://localhost:8080/api/v1/users/{id} TESTED WITH PUT, DELETE
 * API: http://localhost:8080/api/v1/user TESTED WITH GET -> Returns single user info
 *   
 * PENDING WILL ADD ROLE-BASED FILTERS AFTER AS WE FINISH FRONT END
 *   
 */
	
	
//Get all users
	@CrossOrigin
	@GetMapping("/users")
	public List<User> getAllUser(){
		return userRepository.findAll();
	}
	
	//Get Username from auth getName() and uses the value to search for record with thta name
	@CrossOrigin
	@GetMapping("/user")
	public ResponseEntity<User> getUserByName(Authentication auth ) {
		String temp = auth.getName();
		System.out.println(temp);
		//User user = userRepository.findByusername("David99");
		User user = userRepository.findByusername(temp);
		return ResponseEntity.ok(user); 
		 
	}
	

	
	//create user rest api
	@CrossOrigin
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	

	// get user by id rest api
	@CrossOrigin
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(user);
	}

	

	@CrossOrigin
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmail(userDetails.getEmail());
		
		User updateduser = userRepository.save(user);
		return ResponseEntity.ok(updateduser);
	}
	
	// delete user rest api
	@CrossOrigin
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}