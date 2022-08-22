package com.springEcom.RestAPI.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springEcom.RestAPI.DAO.UserRepo;
import com.springEcom.RestAPI.Entities.Users;

@Service
public class UserServiceImpl implements UserServices {

	@Autowired
	private UserRepo userRepo;
	
//	Creating User
	@Override
	public Users CreateUser(Users user) throws Exception {
		Users local = this.userRepo.findByUsername(user.getUsername());
		if(local !=null)
		{
			System.out.println("Username is already registered");
			throw new Exception("User already Present");
		}
		else
		{
			local = this.userRepo.save(user);
		}
		return local;
	}

	@Override
	public Users getUserByName(String name) {
		return this.userRepo.findByUsername(name);
		
	}

	@Override
	public Users verify(Users user) {
		Users result = this.userRepo.findByUsername(user.getUsername());
		if(user.getPassword().equals(result.getPassword()))
			return result;
		return null;
	}

	
}
