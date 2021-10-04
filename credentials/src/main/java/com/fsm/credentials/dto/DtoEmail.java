package com.fsm.credentials.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsm.credentials.entities.EmailEntities;
import com.fsm.credentials.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DtoEmail implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String email;
    private Boolean mainEmail;
    @JsonIgnore
    private DtoUser user;
    
    DtoEmail(EmailEntities emailEntities, User userEntites){
    	this.id = emailEntities.getId();
    	this.email = emailEntities.getEmail();
    	this.mainEmail = emailEntities.getMainEmail();
    	this.user = new DtoUser(userEntites);
    }
    DtoEmail(EmailEntities emailEntities){
    	this.id = emailEntities.getId();
    	this.email = emailEntities.getEmail();
    	this.mainEmail = emailEntities.getMainEmail();
    }

}