package com.fsm.order.external.entities.carts;

import java.util.HashSet;
import java.util.Set;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder(toBuilder = true)
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Setter
public class Product {
	@EqualsAndHashCode.Include
	private String id;
	private String name;
	private Double price;
	private String UrlImg;
	@JsonIgnore
	@Default
	private Set<Cart>carts = new HashSet<>(); 
	
	
}
