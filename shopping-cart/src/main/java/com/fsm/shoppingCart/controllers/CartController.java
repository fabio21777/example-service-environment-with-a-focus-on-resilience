package com.fsm.shoppingCart.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.shoppingCart.dtos.CartDto;
import com.fsm.shoppingCart.services.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {
	@Autowired 
	CartService cartService;
	@GetMapping(value = "/{id}")
	public ResponseEntity<CartDto> findById(@PathVariable String id){
		CartDto cartDto = cartService.findById(id);
		return ResponseEntity.ok(cartDto);
	}
	
}
