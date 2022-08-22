package com.springEcom.RestAPI.Entities;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class prodList {
	public prodList()
	{
		
	}
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String Title;
	private String Brand;
	private String Description;
	private double price;
	private double Rating;
	private String imgUrl;
	private int[] pincodes;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getBrand() {
		return Brand;
	}
	public void setBrand(String brand) {
		Brand = brand;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Double getRating() {
		return Rating;
	}
	public void setRating(double rating) {
		Rating = rating;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public int[] getPincodes() {
		return pincodes;
	}
	public void setPincodes(int[] pincodes) {
		this.pincodes = pincodes;
	}
	@Override
	public String toString() {
		return "prodList [id=" + id + ", Title=" + Title + ", Brand=" + Brand + ", Description=" + Description
				+ ", price=" + price + ", Rating=" + Rating + ", imgUrl=" + imgUrl + ", pincodes="
				+ Arrays.toString(pincodes) + "]";
	}
	public prodList(long id, String title, String brand, String description, double price, double rating, String imgUrl,
			int[] pincodes) {
		super();
		this.id = id;
		Title = title;
		Brand = brand;
		Description = description;
		this.price = price;
		Rating = rating;
		this.imgUrl = imgUrl;
		this.pincodes = pincodes;
	}
		
}