package com.fsm.order.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Setter
@Entity
@ToString
@Table(name = "tb_user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@EqualsAndHashCode.Include
	private String id;
	private String name;
	@OneToMany(mappedBy = "user")
	private Set<Order> orders = new HashSet<>();
}

