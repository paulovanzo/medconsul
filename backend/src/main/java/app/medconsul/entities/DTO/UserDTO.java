package app.medconsul.entities.DTO;

import app.medconsul.entities.Role;

import java.util.ArrayList;
import java.util.UUID;
import java.util.Collection;

public class UserDTO {

    private UUID id;

    private String name;

    private String username;

    private String password;

    private Collection<Role> roles = new ArrayList<>();

    public UserDTO(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.roles = new ArrayList<>();
    }

    public UserDTO() {
        this.name = "";
        this.username = "";
        this.password = "";
        this.roles = new ArrayList<>();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

}
