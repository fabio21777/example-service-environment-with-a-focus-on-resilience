package com.fsm.showcase.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.showcase.dto.ProductDto;
import com.fsm.showcase.externalEntities.DtoProduct;
import com.fsm.showcase.httpClient.WereHouseHttpClient;
import com.fsm.showcase.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	@Autowired 
	ProductService productService;
	@Autowired
	WereHouseHttpClient wereHouseHttpClient;
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductDto> findById(@PathVariable String id){
		ProductDto productDto = productService.findById(id);
		return ResponseEntity.ok(productDto);
	}
	
	
	@GetMapping
	public ResponseEntity<List<ProductDto>>findAll(){
		return ResponseEntity.ok(productService.findAll());
	}
	@GetMapping(value = "/werehouse/products/{id}")
	public ResponseEntity<DtoProduct>findByIdInWereHouseEntityService(@PathVariable String id){
		DtoProduct product = wereHouseHttpClient.getProduct(id);
		return ResponseEntity.ok(product);
	}
}
