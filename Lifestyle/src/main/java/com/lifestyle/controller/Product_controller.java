package com.lifestyle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lifestyle.entity.Products;
import com.lifestyle.service.Product_Service;

@RestController
public class Product_controller {

	@Autowired
	private Product_Service ProductService;
	
	
	
	@PostMapping("/addProduct")
	public String add(@RequestBody Products Product) {
		
		return ProductService.saveProduct(Product);
		
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	public String delete(@PathVariable("id") int id) {
		
		return ProductService.deletebyid(id);
		
	}
	
	@PutMapping("/updateProduct")
	public String update(@RequestBody Products Product) {
		
		return ProductService.updateProduct(Product);
		
	}
	
//	@GetMapping("/getProducts")
//	public List<Products> findAllProducts(){
//		
//		return ProductService.getproducts();
//	}
	
}
