package com.fsm.serviceone.entities;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Builder
@Data
@Entity
@Table(name="tb_email")
public class EmailEntities implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(value = AccessLevel.NONE)
    private String id;
    @Setter(value = AccessLevel.NONE)
    @Email
    @NotEmpty(message = "Email Required")
    @Size(min = 5, 
    	  max = 50, 
    	  message = "invalid size email must be between 5 to 50 characters")
    private String email;
    @Setter(value = AccessLevel.NONE)
    private Boolean mainEmail;
    
    @Setter(value = AccessLevel.NONE)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

  /*  public EmailEntities() {
    }

    public EmailEntities(String id, String email, Boolean mainEmail, User user) {
        this.id = id;
        this.email = email;
        this.mainEmail = mainEmail;
        this.user = user;
    }

    public String getId() {
        return id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getMainEmail() {
        return mainEmail;
    }

    public User getUser() {
        return user;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((email == null) ? 0 : email.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        EmailEntities other = (EmailEntities) obj;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        return true;
    }*/
}
