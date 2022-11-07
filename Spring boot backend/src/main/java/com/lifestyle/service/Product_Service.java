package com.lifestyle.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lifestyle.entity.Product_category;
import com.lifestyle.entity.Products;
import com.lifestyle.repository.Category_Repository;
import com.lifestyle.repository.CrudRepo;

@Service
public class Product_Service {
	
	@Autowired
	private CrudRepo crudrepo;
	
	@Autowired
	private Category_Repository category_repository;
	
	public String saveProduct(Products product) {
		
		String CategoryName=product.getCategory().getCategoryname();
		Optional<Product_category> categoryOpt=category_repository.findByCategoryname(CategoryName);
		if(categoryOpt.isPresent()) {
			product.setCategory(categoryOpt.get());
		}
		
		crudrepo.save(product);
		return "Product is added successfully";
	}
	
	
	public String deletebyid(int id) {
		crudrepo.deleteById(id);
		return "Product is deleted" +id;
		
	}
	
	//public List<Products> getproducts(){
		
		//return crudrepo.findAll();
		
	//}
	
	
	public String updateProduct(Products product) {
		Products existingProduct=crudrepo.findById(product.getID()).orElse(null);
		existingProduct.setProductname(product.getProductname());
		existingProduct.setProductprice(product.getProductprice());
		existingProduct.setImageURL(product.getImageURL());
		//existingProduct.setCategory(product.getCategory());
		String CategoryName=product.getCategory().getCategoryname();
		Optional<Product_category> categoryOpt=category_repository.findByCategoryname(CategoryName);
		if(categoryOpt.isPresent()) {
			product.setCategory(categoryOpt.get());
		}
	
		
		crudrepo.save(existingProduct);
		return "Product is updated";
	}
	

}
