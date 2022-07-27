package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nexus.backend.model.PhonePlan;

@Repository
public interface PhonePlanRepository extends JpaRepository<PhonePlan, Long>{

}
