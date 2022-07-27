package com.nexus.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.PhonePlan;
import com.nexus.backend.repository.PhonePlanRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/api/v1/")
/**
 * API: http://localhost:8080/api/v1/devices ; GET
 * 
 * 
 * 
 * */

@CrossOrigin(origins = "http://localhost:4200")
public class PhonePlanController {
	
	@Autowired
	private PhonePlanRepository phonePlanRepository;
	
	@GetMapping("/phone_plans")
	public List<PhonePlan> getAllUser(){
		return phonePlanRepository.findAll();
	}
	
	
	
}
