package com.fsm.showcase.httpClient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.showcase.externalEntities.DtoProduct;


@FeignClient(name = "WereHouse-Service", url = "localhost:5000" )
public interface WereHouseHttpClient {
	@GetMapping(value = "/products/{id}" )
	public DtoProduct getProduct(@PathVariable("id") String id);

}
