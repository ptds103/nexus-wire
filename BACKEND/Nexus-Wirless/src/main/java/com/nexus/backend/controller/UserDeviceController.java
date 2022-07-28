package com.nexus.backend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.User;
import com.nexus.backend.model.UserDevice;
import com.nexus.backend.repository.UserDeviceRepository;


/**
  API USED IN THIS CONTROLLER
* API: http://localhost:8080/api/v1/user_devices TESTED WITH GET, POST
* 
*   
* PENDING WILL ADD ROLE-BASED FILTERS AFTER AS WE FINISH FRONT END
*   
*/
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class UserDeviceController {
	
	@Autowired
	private UserDeviceRepository userdeviceRepository;
	
	@CrossOrigin
	@GetMapping("/user_devices")
	public List<UserDevice> getAllUser(){
		return userdeviceRepository.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/user_devices")
	public UserDevice createUserDevice(@RequestBody UserDevice device) {
		return userdeviceRepository.save(device);
	}
}

