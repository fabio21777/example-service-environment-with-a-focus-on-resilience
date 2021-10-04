package com.fsm.order.external.entities.credentials;

import java.io.Serializable;
import java.util.HashSet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DtoUser implements Serializable {
    private static final long serialVersionUID = 1L;
	private String userName;
	private String password;
	private HashSet<DtoEmail>emails = new HashSet<>();
	
}
