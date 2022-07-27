package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nexus.backend.model.Device;
@Repository 
public interface DeviceRepository extends JpaRepository<Device,Long> {

}
