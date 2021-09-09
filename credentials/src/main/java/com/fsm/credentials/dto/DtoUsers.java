package com.fsm.credentials.dto;

import java.io.Serializable;
import java.util.List;

import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.entities.User;

import lombok.Getter;

@Getter
public class DtoUsers implements Serializable {
    private static final long serialVersionUID = 1L;
	private String userName;
	private String password;
	private List<String> Email;
	
	
	public DtoUsers(User user,EmailEntities emailEntities ) {
		userName = user.getUsername();
		password = user.getPassword();
		Email.add(emailEntities.getEmail()) ;
	}
	
	
}
