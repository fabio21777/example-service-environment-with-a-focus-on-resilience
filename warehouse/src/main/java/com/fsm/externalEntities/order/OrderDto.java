package com.fsm.externalEntities.order;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto  implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private Integer orderStatus;
	private UserDto user;
	private Set<ProductDto> products = new HashSet<>();
	

}
