package com.fsm.shoppingCart.clientHttp;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.shoppingCart.dtos.DtoUserInCreditialService;

@FeignClient(name = "user-service", url = "https://credentials-tr.herokuapp.com")
public interface ClientHttpUser{
	
	@GetMapping(value = "/users/{id}")
	public  DtoUserInCreditialService getUser(@PathVariable("id") String id);
}
