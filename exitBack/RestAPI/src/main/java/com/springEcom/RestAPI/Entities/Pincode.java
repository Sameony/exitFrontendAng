package com.springEcom.RestAPI.Entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
public class Pincode implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private int pincode;
	private Long id;
	public Pincode()
	{
		
	}
	public Pincode(int pincode, Long id) {
		super();
		this.pincode = pincode;
		this.id = id;
	}
	@Override
	public String toString() {
		return "Pincode [pincode=" + pincode + ", id=" + id + "]";
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
