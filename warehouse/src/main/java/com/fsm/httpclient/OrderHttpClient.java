package com.fsm.httpclient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.externalEntities.order.OrderDto;

@FeignClient(name = "Order-service", url = "http://35.198.10.134:7000")
public interface OrderHttpClient {
	@GetMapping(value = "/orders/{id}")
	public OrderDto findByIdOrderInOrderService (@PathVariable("id") Long id);
}
