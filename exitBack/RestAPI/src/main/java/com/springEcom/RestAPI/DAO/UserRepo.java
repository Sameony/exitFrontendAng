package com.springEcom.RestAPI.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springEcom.RestAPI.Entities.Users;

public interface UserRepo extends JpaRepository<Users, Long> {

	public Users findByUsername(String username);
	
}
