package com.springEcom.RestAPI.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springEcom.RestAPI.Entities.Users;
import com.springEcom.RestAPI.Entities.prodList;
import com.springEcom.RestAPI.Services.ProductServices;
import com.springEcom.RestAPI.Services.UserServices;
import com.springEcom.RestAPI.Entities.Pincode;

@RestController
@CrossOrigin("*")
public class Controller {

//pincode

	
	@Autowired
	private ProductServices productServices;

	@Autowired
	private UserServices userServices;

	@GetMapping("/home")
	public String home() {
		return ("Hi welcome hello");
	}

	// Getting products
	@PostMapping("/getProducts")
	public List<prodList> getProdList() {
		return this.productServices.getProdList();

	}

	// Getting Single product by id
	@GetMapping("/products/{prodID}")
	public prodList getProdList(@PathVariable String prodID) {
		return this.productServices.getProdList(Long.parseLong(prodID));

	}
// Search for availability
	@PostMapping("/products/pincode")
	public prodList getPostal(@RequestBody Pincode check) {
		
		{
			prodList local = this.productServices.getProdList(check.getId());
			for(int i: local.getPincodes())
			{
				if(i==check.getPincode())
				{
					return local;
				}
			}
			return null;
		}
	}

	// Posting Single product by id
	@PostMapping("/products")
	public prodList addProduct(@RequestBody prodList product) {
		System.out.println(product);
		return this.productServices.addProduct(product);

	}

//Creating user
	@PostMapping("/users")
	public Users createUser(@RequestBody Users user) throws Exception {
		return this.userServices.CreateUser(user);
	}

// MAtching user login input
	@PostMapping("/users/match")
	public Users matchUser(@RequestBody Users user) {
		return this.userServices.verify(user);
	}
// Get product by name
	@PostMapping("/products/name")
	public prodList getProdByName(@RequestBody String name) {
		prodList local = new prodList();
		for(prodList item: this.productServices.getProdList())
		{
			if(item.getTitle().equals(name))
				local=item;
		}
		return local;
	}
	// Get product by brand
		@PostMapping("/products/brand")
		public List<prodList> getProdByBrand(@RequestBody String brand) {
			List<prodList> local = new ArrayList<>();
			for(prodList item: this.productServices.getProdList())
			{
				if(item.getBrand().equalsIgnoreCase(brand))
					local.add(item);
			}
			return local;
		}

//	Get Price by providing ID
	@PostMapping("/products/price")
	public double getPrice(@RequestBody String id) {
		prodList result = this.productServices.getProdList(Long.parseLong(id));
		System.out.println(result);
		return result.getPrice();
	}

	// Getting Single product by id
	@GetMapping("/users/{userName}")
	public Users createUser(@PathVariable String userName) {
		return this.userServices.getUserByName((userName));

	}

}
