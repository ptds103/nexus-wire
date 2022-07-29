package com.nexus.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexus.backend.model.User;
import com.nexus.backend.model.UserDevice;
import com.nexus.backend.model.UserPlan;

@Repository
public interface UserDeviceRepository extends JpaRepository<UserDevice, Long>{
	List<UserDevice> findByusername(String string);


	
}
