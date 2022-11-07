package com.lifestyle.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.lifestyle.entity.Product_category;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel="Product_category", path= "products-category")
public interface Category_Repository extends CrudRepository<Product_category, Integer> {

  Optional<Product_category> findByCategoryname(String categoryname);

	
}
