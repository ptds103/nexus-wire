package com.nexus.backend.model;
//Created this model to be used to authorized users and return status
public class AuthUser {
	private String status;
	
	public AuthUser() {}

	public AuthUser(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}