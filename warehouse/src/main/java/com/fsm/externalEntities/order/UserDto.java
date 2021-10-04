package com.fsm.externalEntities.order;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto  implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String id;
	private String name;
	@Setter(value = AccessLevel.NONE)
	@JsonIgnore
	private Set<OrderDto> orders = new HashSet<>();
}
