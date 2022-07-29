package com.nexus.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import com.nexus.backend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
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
	@CrossOrigin
	@GetMapping("/user_plans")
	public List<UserPlan> getAllUser(){
		return userPlanRepository.findAll();
	}

	
	@CrossOrigin
	@GetMapping("/user_plans/{id}")
	public ResponseEntity<UserPlan> getUserPlanById(@PathVariable Long id) {
		UserPlan plan = userPlanRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(plan);
	}

	//create user rest api
		@CrossOrigin
		@PostMapping("/user_plan")
		public UserPlan createUserPlan(@RequestBody User user) {
			return userPlanRepository.save(user);
		}

		@CrossOrigin
		@PutMapping("/user_plans/{id}")
		public ResponseEntity<UserPlan> updateUserPlan(@PathVariable Long id, @RequestBody UserPlan userDetails){
			UserPlan userPlan = userPlanRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
			
			userPlan.setPlanNameU(userDetails.getPlanNameU());			
			UserPlan updateduserPlan = userPlanRepository.save(userPlan);
			return ResponseEntity.ok(updateduserPlan);
		}

		@CrossOrigin
		@GetMapping("/user_plan")
		public List<UserPlan> getUserDeviceByName(Authentication auth) {
			String temp = auth.getName();
			System.out.println(temp);
			return (List<UserPlan>) userPlanRepository.findByuserNameU(temp);
		}
	
		
}
