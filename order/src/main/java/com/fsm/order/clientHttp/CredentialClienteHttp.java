package com.fsm.order.clientHttp;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.fsm.order.external.entities.credentials.DtoUser;

@FeignClient(name = "credential-service", url = "localhost:8000")
public interface CredentialClienteHttp {
	@GetMapping(value = "/users/{id}" )
	public DtoUser getUser(@PathVariable("id") String id);

}
