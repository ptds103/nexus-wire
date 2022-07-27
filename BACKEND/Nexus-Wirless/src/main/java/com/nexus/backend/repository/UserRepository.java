package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nexus.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByusername(String string);




}
