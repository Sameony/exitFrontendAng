package com.springEcom.RestAPI.Services;

import java.util.List;

import com.springEcom.RestAPI.Entities.prodList;

public interface ProductServices {
	public List<prodList> getProdList();

	public prodList getProdList(long prodID);
	public prodList addProduct(prodList product);
	

}
