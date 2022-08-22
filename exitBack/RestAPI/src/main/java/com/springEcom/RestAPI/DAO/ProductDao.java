 package com.springEcom.RestAPI.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springEcom.RestAPI.Entities.prodList;

public interface ProductDao extends JpaRepository<prodList, Long>{



}
