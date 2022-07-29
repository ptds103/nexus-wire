package com.nexus.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nexus.backend.model.User;
import com.nexus.backend.model.UserPlan;

@Repository
public interface UserPlanRepository extends JpaRepository<UserPlan, Long> {

	List<UserPlan> findByuserNameU(String string);

	UserPlan save(User user);

}
