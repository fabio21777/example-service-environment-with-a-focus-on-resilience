package com.fsm.shoppingCart.clientHttp;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.shoppingCart.externalEntities.showcase.ProductDto;

@FeignClient(name = "showCase-service", url = "http://localhost:6010")
public interface ClientHttpShowCase{
	
	@GetMapping(value = "/products/{id}")
	public  ProductDto getProduct(@PathVariable("id") String id);
}
