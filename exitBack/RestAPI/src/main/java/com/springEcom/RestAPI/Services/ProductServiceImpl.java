package com.springEcom.RestAPI.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springEcom.RestAPI.DAO.ProductDao;
import com.springEcom.RestAPI.Entities.prodList;

@Service
public class ProductServiceImpl implements ProductServices {

	@Autowired
	private ProductDao productDao;
	
	public ProductServiceImpl()
	{
		
	}
	@Override
	public List<prodList> getProdList() {
		return productDao.findAll();
	}
	
	@Override
	public prodList getProdList(long prodID) {
		return productDao.findById(prodID).get();
			}
	@Override
	public prodList addProduct(prodList product) {
		// TODO Auto-generated method stub
		productDao.save(product);
		return product;
	}
	
	
	
	

}
