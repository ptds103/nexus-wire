package com.nexus.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexus.backend.model.Role;


public interface RoleRepository  extends JpaRepository<Role, Long>{

	Role findByName(String string);

}

