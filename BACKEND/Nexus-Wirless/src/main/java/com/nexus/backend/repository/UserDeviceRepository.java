package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nexus.backend.model.UserDevice;

@Repository
public interface UserDeviceRepository extends JpaRepository<UserDevice, Long>{

}
