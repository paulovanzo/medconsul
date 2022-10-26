package app.medconsul.services;

import app.medconsul.entities.DTO.UserDTO;
import app.medconsul.entities.Role;
import app.medconsul.entities.User;

import java.util.List;

public interface IUserService {
    User save(UserDTO user);
    Role save(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
}
