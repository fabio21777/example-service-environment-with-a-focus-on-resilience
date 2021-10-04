package com.fsm.order.clientHttp;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.order.external.entities.carts.Cart;




@FeignClient(name = "cart-service", url = "localhost:9000")
public interface CartClientHttp {
	@GetMapping(value = "/carts/{id}" )
	public Cart getCart(@PathVariable("id") String id);
}
