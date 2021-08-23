package com.fsm.serviceone.entities;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Email implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    private String id;
    private String email;
    private Boolean mainEmail;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    public Email() {
    }

    public Email(String id, String email, Boolean mainEmail,User user) {
        this.id = id;
        this.email = email;
        this.mainEmail = mainEmail;
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
        Email other = (Email) obj;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        return true;
    }
    

}
