package com.nexus.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.User;
import com.nexus.backend.model.UserPlan;
import com.nexus.backend.repository.UserPlanRepository;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserPlanController {
	
	@Autowired
	private UserPlanRepository userPlanRepository;
	//Admin USE
	@GetMapping("/user_plans")
	public List<UserPlan> getAllUser(){
		return userPlanRepository.findAll();
	}
	
	
	//USER USE
	//Get Plan Associated with User
	//MOVE TO USER PLANS
	@CrossOrigin
	@GetMapping("/user_plan")
	public ResponseEntity<UserPlan> getUserByName(Authentication auth ) {
		String temp = auth.getName();
		System.out.println(temp);
		//User user = userRepository.findByusername("David99");
		UserPlan plan = userPlanRepository.findByuserNameU(temp);
	return ResponseEntity.ok(plan); 
	}
	
	//create user rest api
		@CrossOrigin
		@PostMapping("/user_plan")
		public UserPlan createUserPlan(@RequestBody User user) {
			return userPlanRepository.save(user);
		}
}
