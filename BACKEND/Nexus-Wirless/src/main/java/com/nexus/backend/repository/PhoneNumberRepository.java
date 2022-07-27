package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nexus.backend.model.PhoneNumber;
import org.springframework.stereotype.Repository;

@Repository
public interface PhoneNumberRepository extends JpaRepository<PhoneNumber, Long>{

}
