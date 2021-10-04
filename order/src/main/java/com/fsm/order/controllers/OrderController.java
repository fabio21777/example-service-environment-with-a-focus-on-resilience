package com.fsm.order.controllers;

import java.net.ConnectException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsm.order.clientHttp.CartClientHttp;
import com.fsm.order.dto.OrderDto;
import com.fsm.order.external.entities.Cart;
import com.fsm.order.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {
	@Autowired
	OrderService orderService;
	@Autowired
	CartClientHttp cartClientHttp;
	
	@GetMapping(value = "carts/{id}")
	public Cart findCartByIdInCartService(@PathVariable String id) throws ConnectException{
		Cart cart = cartClientHttp.getCart(id);
		return (cart);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<OrderDto> findById(@PathVariable Long id){
		OrderDto order = orderService.findById(id);
		return ResponseEntity.ok(order);
	}
}
