package com.mentor.rushmyskills.controller;

import com.mentor.rushmyskills.model.User;
import com.mentor.rushmyskills.payload.FBLoginRequest;
import com.mentor.rushmyskills.repository.UserRepository;
import com.mentor.rushmyskills.security.JwtTokenFactory;
import com.mentor.rushmyskills.security.UserContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private UserRepository userRepository;
    private AuthenticationManager authenticationManager;
    private JwtTokenFactory tokenProvider;

    @Autowired
    public AuthController(UserRepository userRepository, JwtTokenFactory tokenProvider) {
        this.userRepository = userRepository;
        this.authenticationManager = null;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity authenticateFacebookUser(@Valid @RequestBody FBLoginRequest fbLoginRequest) {

        @NotBlank String fbUserId = fbLoginRequest.getUserId();
        @NotBlank String fbName = fbLoginRequest.getName();
        @NotBlank String fbEmail = fbLoginRequest.getEmail();
        @NotBlank String fbPictureUrl = fbLoginRequest.getPictureUrl();
        if (!userRepository.existsByFbUserId(fbUserId)) {
            /* Not used due to login logic
            if (userRepository.existsByEmailIgnoreCase(fbEmail)) {
                return ResponseEntity.badRequest().body("Email already used");
            }*/

            User user = new User(fbUserId, fbName, fbEmail, fbPictureUrl);

            /*Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new AppException("User Role not set."));

            user.setRoles(Collections.singleton(userRole));*/

            userRepository.save(user);
        } else {
            Optional<User> fbUser = userRepository.findByFbUserId(fbUserId);
            if (!fbUser.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            User user = fbUser.get();
            if (!fbEmail.equals(user.getEmail())) {
                user.setEmail(fbEmail);
            }
            if (!fbName.equals(user.getName())) {
                user.setName(fbName);
            }
            if (!fbPictureUrl.equals(user.getPictureUrl())) {
                user.setPictureUrl(fbPictureUrl);
            }
            userRepository.save(user);
        }

        Map<String, String> tokens = tokenProvider.createTokenPair(UserContext.create(fbUserId, Collections.emptyList()));
        return ResponseEntity.ok(tokens);
    }

    @GetMapping("/me")
    public String getMe() {
        return "ola";
    }
}
