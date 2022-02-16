package com.fsm.order.controllers;

import java.net.ConnectException;

import com.fsm.order.clientHttp.CartClientHttp;
import com.fsm.order.clientHttp.CredentialClienteHttp;
import com.fsm.order.dto.OrderDto;
import com.fsm.order.external.entities.carts.Cart;
import com.fsm.order.external.entities.credentials.DtoUser;
import com.fsm.order.services.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;



@RestController
@RequestMapping(value = "/orders")
public class OrderController {
	@Autowired
	OrderService orderService;
	@Autowired
	CartClientHttp cartClientHttp;

	
	@Autowired
	CredentialClienteHttp credentialClienteHttp;
	@GetMapping(value = "carts/{id}")
	@Bulkhead(name = "bulkheadService1")
	@CircuitBreaker(name = "interfaceFindCartByIdInCartService")
	public ResponseEntity<Cart> findCartByIdInCartService(@PathVariable String id) throws ConnectException{
		Cart cart = cartClientHttp.getCart(id);
		return ResponseEntity.ok(cart);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<OrderDto> findById(@PathVariable Long id){
		OrderDto order = orderService.findById(id);
		return ResponseEntity.ok(order);
	}
	
	@GetMapping(value = "users/{id}")
	public ResponseEntity<DtoUser> findUserByIdInCredentialsService(@PathVariable String id) throws ConnectException{
		DtoUser user = credentialClienteHttp.getUser(id);
		return ResponseEntity.ok(user);
	}	
}
