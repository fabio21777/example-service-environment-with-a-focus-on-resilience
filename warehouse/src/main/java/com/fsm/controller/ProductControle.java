package com.fsm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.dto.DtoProduct;
import com.fsm.services.ProductService;

@RestController
@RequestMapping (value = "/products")
public class ProductControle {
	@Autowired
	ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<DtoProduct>> FindAll(){
		List<DtoProduct> list = productService.findAll();
		return ResponseEntity.ok(list);
	}

}
