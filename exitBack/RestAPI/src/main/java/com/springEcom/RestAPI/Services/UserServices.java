package com.springEcom.RestAPI.Services;

import com.springEcom.RestAPI.Entities.Users;

public interface UserServices {

	public Users CreateUser(Users user) throws Exception;
	public Users getUserByName(String name);
	public Users verify(Users user);
}
