package com.fsm.shoppingCart.clientHttp;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.shoppingCart.dtos.DtoUserInCreditialService;

@FeignClient(name = "credential-service", url = "http://localhost:8000")
public interface ClientHttpUser{
	
	@GetMapping(value = "/users/{id}")
	public  DtoUserInCreditialService getUser(@PathVariable("id") String id);
}
