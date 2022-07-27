


package com.nexus.backend.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "phone_plan")
public class PhonePlan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "plan_name")
	private String planName;
	
	@Column(name = "device_limit")
	private String deviceLimit;
	
	@Column(name = "price_per_line")
	private String pricePerLine;
	
	@Column(name = "description")
	private String description;
	
	public PhonePlan(){
		
	}
			
			
	public PhonePlan(String planName, String deviceLimit, String pricePerLine, String description) {
		super();
		this.planName = planName;
		this.deviceLimit = deviceLimit;
		this.pricePerLine = pricePerLine;
		this.description = description;

	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public String getDeviceLimit() {
		return deviceLimit;
	}
	public void setDeviceLimit(String deviceLimit) {
		this.deviceLimit = deviceLimit;
	}
	public String getPricePerLine() {
		return pricePerLine;
	}
	public void setPricePerLine(String pricePerLine) {
		this.pricePerLine = pricePerLine;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	
}
