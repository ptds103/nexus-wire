package com.nexus.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import com.nexus.backend.model.Device;
import com.nexus.backend.repository.DeviceRepository;

/**
 * API: http://localhost:8080/api/v1/devices ; GET,POST
 * API: http://localhost:8080/api/v1/devices/id ; GET,PUT, DELETE
 * 
 * 
 * */


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class DeviceController {
	@Autowired
	private DeviceRepository deviceRepository;
	
	@GetMapping("/devices")
	public List<Device> getAllDevices(){
		return deviceRepository.findAll();
	}
	@CrossOrigin
	@PostMapping("/devices")
	public Device createDevice(@RequestBody Device device){
		return deviceRepository.save(device);
	}
	
	@CrossOrigin
	@PutMapping("/devices/{id}")
	public ResponseEntity<Device> updateDevice(@PathVariable Long id, @RequestBody Device deviceDetails){
		Device device = deviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Device not exist with id :" + id));
		
		device.setDeviceName(deviceDetails.getDeviceName());
		device.setYear(deviceDetails.getYear());
		device.setProcessor(deviceDetails.getProcessor());
		device.setDescription(deviceDetails.getDescription());
		
		Device updatedDevice = deviceRepository.save(device);
		return ResponseEntity.ok(updatedDevice);
	}
	
	@CrossOrigin
	@DeleteMapping("/devices/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDevice(@PathVariable Long id){
		Device device = deviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("device not exist with id :" + id));
		
		deviceRepository.delete(device);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@CrossOrigin
	@GetMapping("/devices/{id}")
	public ResponseEntity<Device> getDeviceById(@PathVariable Long id) {
		Device device = deviceRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Device not exist with id :" + id));
		return ResponseEntity.ok(device);
	}

}
