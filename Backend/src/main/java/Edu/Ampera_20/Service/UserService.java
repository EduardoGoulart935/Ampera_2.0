package Edu.Ampera_20.Service;

import Edu.Ampera_20.Model.User;
import Edu.Ampera_20.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User login(String email, String password){
        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent() && user.get().getPassword().equals(password)){
            return user.get();
        }
        return null;
    }
}
