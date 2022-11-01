package app.medconsul.services;

import app.medconsul.entities.DTO.UserDTO;
import app.medconsul.entities.Role;
import app.medconsul.entities.User;
import app.medconsul.repositories.IRoleRepository;
import app.medconsul.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional
public class UserService implements IUserService{
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IRoleRepository roleRepository;

    @Override
    public User save(UserDTO user) {
        User newUser = new User(user.getName(),user.getUsername(),user.getPassword(),user.getRoles());
        return userRepository.save(newUser);
    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        User user = userRepository.findByUsername(username);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
