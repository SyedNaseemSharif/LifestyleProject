package com.lifestyle.entity;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Data;


@Entity
@Table(name="Product_Category")
public class Product_category {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Category_ID")	
    private int id;
	
	
	@Column(name="Category_name")
    private String categoryname;
	
	
@OneToMany(cascade=CascadeType.ALL, mappedBy="category")
private List<Products> products;
//	@OneToMany(cascade=CascadeType.ALL, mappedBy="category")
//	private Set<Products> products=new HashSet<>();

//public void add(Products product) {
//	if(product!=null) {
//		if (products==null) {
//			products=new HashSet<>();
//		}
//			products.add(product);
//			product.setCategory(this);
//	}
//}
	public int getID() {
		return id;
	}


	public void setID(int iD) {
		id = iD;
	}


	public String getCategoryname() {
		return categoryname;
	}


	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}


	public List<Products> getProducts() {
		return products;
	}


	public void setProducts(List<Products> products) {
		this.products = products;
	}
	

}
