package com.nexus.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexus.backend.model.AuthUser;

//@CrossOrigin(origins="http://localhost:4200/login")
@RestController
@RequestMapping("/api/v1/")
public class AuthUserController {

	// validate login
	@CrossOrigin
	@GetMapping(produces = " application/json")
	@RequestMapping("/login")
	public AuthUser validateLogin() {
		// String
		// System.out.println("attempt to login");
		return new AuthUser("User successfully authentcated");
	}
}
