package com.fsm.serviceone.entites;
import java.io.Serializable;


public class Email implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String email;
    private Boolean mainEmail;
    
    public Email() {
    }

    public Email(String id, String email, Boolean mainEmail) {
        this.id = id;
        this.email = email;
        this.mainEmail = mainEmail;
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

    public void setMainEmail(Boolean mainEmail) {
        this.mainEmail = mainEmail;
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
