
package com.nexus.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_device")
public class UserDevice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long device_id;

	@Column(name = "device_name_d")
	private String deviceNameD;

	@Column(name = "username")
	private String username;

	@Column(name = "phone_number_d")
	private String phoneNumberD;

	@Column(name = "plan_name_d")
	private String planNameD;

	@Column(name = "user_device_first_name")
	private String userDeviceFirstName;

	@Column(name = "user_device_last_name")
	private String userDeviceLastName;

	@Column(name = "price")
	private Double price;

	public UserDevice() {

	}

	public UserDevice(String idUserDevice, String username, String deviceNameD, String phoneNumberD, String planNameD,
			String userDeviceFirstName, String userDeviceLastName, Double price) {
		super();

		this.deviceNameD = deviceNameD;
		this.phoneNumberD = phoneNumberD;
		this.planNameD = planNameD;
		this.userDeviceFirstName = userDeviceFirstName;
		this.userDeviceLastName = userDeviceLastName;
		this.username = username;
		this.price = price;

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getId() {
		return device_id;
	}

	public void setId(long id) {
		this.device_id = id;
	}

	public String getDeviceNameD() {
		return deviceNameD;
	}

	public void setDeviceNameD(String deviceNameD) {
		this.deviceNameD = deviceNameD;
	}

	public String getPhoneNumberD() {
		return phoneNumberD;
	}

	public void setPhoneNumberD(String phoneNumberD) {
		this.phoneNumberD = phoneNumberD;
	}

	public String getPlanNameD() {
		return planNameD;
	}

	public void setPlanNameD(String planNameD) {
		this.planNameD = planNameD;
	}

	public String getUserDeviceFirstName() {
		return userDeviceFirstName;
	}

	public void setUserDeviceFirstName(String userDeviceFirstName) {
		this.userDeviceFirstName = userDeviceFirstName;
	}

	public String getUserDeviceLastName() {
		return userDeviceLastName;
	}

	public void setUserDeviceLastName(String userDeviceLastName) {
		this.userDeviceLastName = userDeviceLastName;
	}
	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
}
