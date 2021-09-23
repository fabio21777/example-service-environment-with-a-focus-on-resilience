package com.fsm.order.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsm.order.entities.Order;
import com.fsm.order.entities.User;

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
	private Set<Order> orders = new HashSet<>();
	
	public UserDto(User user) {
		this.id = user.getId();
		this.name = user.getName();
	} 
	public UserDto (User user, List<Order> orders) {
		this(user);
		orders.forEach(order -> this.orders.add(order));
	}
}
