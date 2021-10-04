package com.fsm.shoppingCart.dtos;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DtoUserInCreditialService implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
	private String userName;
	private String password;
}