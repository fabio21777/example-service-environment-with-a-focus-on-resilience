package com.fsm.shoppingCart.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.shoppingCart.clientHttp.ClientHttpUser;
import com.fsm.shoppingCart.dtos.CartDto;
import com.fsm.shoppingCart.dtos.DtoUserInCreditialService;
import com.fsm.shoppingCart.services.CartService;

@RestController
@RequestMapping("/carts")
public class CartController {
	@Autowired 
	CartService cartService;
	
	@Autowired
	private ClientHttpUser clientHttpUser;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CartDto> findById(@PathVariable String id){
		CartDto cartDto = cartService.findById(id);
		return ResponseEntity.ok(cartDto);
	}
	
	
	@GetMapping(value = "users/{id}")
	public ResponseEntity<DtoUserInCreditialService>findUsersInCreditialService(@PathVariable String id){
		DtoUserInCreditialService var = clientHttpUser.getUser(id);
		System.out.println("aqui ta a chamanda no serviço"+var.getUserName());
		return ResponseEntity.ok(var);
	}
	
}
