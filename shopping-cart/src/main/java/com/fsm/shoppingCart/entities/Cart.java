package com.fsm.shoppingCart.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fsm.shoppingCart.externalEntities.Product;
import com.fsm.shoppingCart.externalEntities.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder
@Entity
@Table(name = "tb_cart")
public class Cart {
	@Id
	private String id;
	@OneToOne(mappedBy = "cart")
	private User user;
	@Default
	@OneToMany(mappedBy = "cart")
	private Set<Product> products = new HashSet<>();
}
