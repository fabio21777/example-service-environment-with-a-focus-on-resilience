package com.fsm.order.external.entities.credentials;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

}