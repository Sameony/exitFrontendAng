package com.springEcom.RestAPI.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Users {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String Name;
	private String username;
	private String email;
	private String password;
	private String gender;
	
	public Users(){
		
	}
	
	public Users(long id, String name, String username, String email, String password, String gender) {
		super();
		this.id = id;
		Name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", Name=" + Name + ", username=" + username + ", email=" + email + ", password="
				+ password + ", gender=" + gender + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
	
}
