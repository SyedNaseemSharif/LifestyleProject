package com.lifestyle.entity;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.lifestyle.repository.Category_Repository;

import lombok.Data;


@Entity
@Table(name="Products")
public class Products {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Product_ID")
	private int ID;
	
    @Column(name="Product_name")
	private String productname;
    
    @Column(name="Image_URL")
    private String imageURL;
    
    
    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name="Category_ID")	
    Product_category category;
    
    
    @Column(name="Product_Price")
    private BigDecimal productprice;

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public Product_category getCategory() {
		return category;
	}

	public void setCategory(Product_category category) {
		this.category = category;
	}



	public BigDecimal getProductprice() {
		return productprice;
	}

	public void setProductprice(BigDecimal productprice) {
		this.productprice = productprice;
	}

	
    
    
    
  
	
}
