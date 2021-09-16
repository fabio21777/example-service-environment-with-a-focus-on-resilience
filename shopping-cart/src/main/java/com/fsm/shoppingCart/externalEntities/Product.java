package com.fsm.shoppingCart.externalEntities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fsm.shoppingCart.entities.Cart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "tb_product")
public class Product {
	@Id
	private String id;
	private String name;
	private Double price;
	private Integer quantity;
	@ManyToOne
	@JoinColumn(name = "cart_id")
	private Cart cart; 
}
