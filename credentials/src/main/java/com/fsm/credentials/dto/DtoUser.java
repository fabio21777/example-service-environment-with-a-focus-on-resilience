package com.fsm.credentials.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.entities.User;

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
	
	
	public DtoUser(User user,Set<EmailEntities> Emails ) {
		this(user);
		Emails.forEach(email -> this.emails.add(new DtoEmail(email)));
	}
	
	public DtoUser(User user) {
		userName = user.getUserName();
		password = user.getPassword();
	}
	
	
}
