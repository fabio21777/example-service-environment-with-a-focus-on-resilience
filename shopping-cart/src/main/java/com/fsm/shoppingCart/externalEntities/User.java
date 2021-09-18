package com.fsm.shoppingCart.externalEntities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fsm.shoppingCart.entities.Cart;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder(toBuilder = true)
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Setter
@Entity
@Table(name = "tb_user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private String id;
	private String name;
	@OneToOne
	@JoinColumn(name = "cart_id")
	private Cart cart;
}
