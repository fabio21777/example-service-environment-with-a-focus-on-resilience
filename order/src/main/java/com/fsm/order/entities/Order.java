package com.fsm.order.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fsm.order.entities.enun.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tb_order")
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
public class Order {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY )
	@EqualsAndHashCode.Include
	private Long id;
	private OrderStatus orderStatus;
	@OneToOne
	@JoinColumn(name = "tb_user")
	private User user;
	@ManyToMany
	@JoinTable(
			name = "tb_product_order", 
			joinColumns = @JoinColumn(name = "order_id"), 
			inverseJoinColumns = @JoinColumn(name = "product_id"))
	private Set<Product> products = new HashSet<>();
}
