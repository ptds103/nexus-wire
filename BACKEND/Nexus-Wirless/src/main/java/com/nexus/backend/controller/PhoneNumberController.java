package com.nexus.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.PhoneNumber;
import com.nexus.backend.repository.PhoneNumberRepository;

@RestController
@RequestMapping("/api/v1/")
public class PhoneNumberController {
	
	@Autowired
	private PhoneNumberRepository phoneNumberRepository;
	
	@GetMapping("/phone_numbers")
	public List<PhoneNumber> getAllUser(){
		return phoneNumberRepository.findAll();
	}
}
