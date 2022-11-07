package com.lifestyle.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.lifestyle.entity.Products;


@CrossOrigin
@Repository
public interface CrudRepo extends CrudRepository<Products, Integer> {
	
	
Page<Products> findByCategoryId(@Param("id") int id, Pageable pageable);
}
