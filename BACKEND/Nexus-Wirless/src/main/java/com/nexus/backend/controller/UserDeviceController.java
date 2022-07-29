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
import com.nexus.backend.model.UserDevice;
import com.nexus.backend.model.UserPlan;
import com.nexus.backend.repository.UserDeviceRepository;


/**
  API USED IN THIS CONTROLLER
* API: http://localhost:8080/api/v1/user_devices TESTED WITH GET, POST
* 
*   
* PENDING WILL ADD ROLE-BASED FILTERS AFTER AS WE FINISH FRONT END
*   
*/
@RestController
@RequestMapping("/api/v1/")
public class UserDeviceController {
	
	@Autowired
	private UserDeviceRepository userdeviceRepository;
	
	@CrossOrigin
	@GetMapping("/user_device")
	public List<UserDevice> getUserDeviceByName(Authentication auth ) {
		String temp = auth.getName();
		System.out.println(temp);
		//User user = userRepository.findByusername("David99");
	return  (List<UserDevice>) userdeviceRepository.findByusername(temp);
	}
	
	@GetMapping("/user_devices")
	public List<UserDevice> getAllUser(){
		return userdeviceRepository.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/user_devices")
	public UserDevice createUserDevice(@RequestBody UserDevice device) {
		return userdeviceRepository.save(device);
		
	}
	
	@CrossOrigin
	@GetMapping("/user_devices/{id}")
	public ResponseEntity<UserDevice> getUserById(@PathVariable Long id) {
		UserDevice userDevice = userdeviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(userDevice);
	}
	
	@CrossOrigin
	@PutMapping("/user_devices/{id}")
	public ResponseEntity<UserDevice> updateUserDevice(@PathVariable Long id, @RequestBody UserDevice userDeviceDetails){
		UserDevice userDevice = userdeviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		
		userDevice.setPhoneNumberD(userDeviceDetails.getPhoneNumberD());   
		userDevice.setPlanNameD(userDeviceDetails.getPlanNameD());
		userDevice.setUserDeviceFirstName(userDeviceDetails.getUserDeviceFirstName());
		userDevice.setUserDeviceLastName(userDeviceDetails.getUserDeviceLastName());
		userDevice.setDeviceNameD(userDeviceDetails.getDeviceNameD());
		
		UserDevice updateduserDevice = userdeviceRepository.save(userDevice);
		return ResponseEntity.ok(updateduserDevice);
	}
	
	// delete user rest api
	@CrossOrigin
	@DeleteMapping("/user_devices/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUserDevice(@PathVariable Long id){
		UserDevice user = userdeviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("userDevice not exist with id :" + id));
		
		userdeviceRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

