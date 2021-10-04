package com.fsm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.dto.DtoProduct;
import com.fsm.externalEntities.order.OrderDto;
import com.fsm.httpclient.OrderHttpClient;
import com.fsm.services.ProductService;

@RestController
@RequestMapping (value = "/products")
public class ProductControle {
	@Autowired
	ProductService productService;
	@Autowired
	OrderHttpClient orderHttpClient;
	
	@GetMapping
	public ResponseEntity<List<DtoProduct>> FindAll(){
		List<DtoProduct> list = productService.findAll();
		return ResponseEntity.ok(list);
	}
	@GetMapping(value = "/{id}")
	public ResponseEntity<DtoProduct>findById(@PathVariable String id){
		return  ResponseEntity.ok(productService.findById(id));
	}
	
	@GetMapping(value = "orders/{id}")
	public ResponseEntity<OrderDto>findOrderIdInOrderService(@PathVariable Long id){
		OrderDto order = orderHttpClient.findByIdOrderInOrderService(id);
		return ResponseEntity.ok(order);
	}
	

}
