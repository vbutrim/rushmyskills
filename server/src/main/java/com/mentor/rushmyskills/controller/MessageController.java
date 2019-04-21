package com.mentor.rushmyskills.controller;

import com.mentor.rushmyskills.model.User;
import com.mentor.rushmyskills.payload.FBLoginRequest;
import com.mentor.rushmyskills.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.Collections;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class MessageController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity authenticateFacebookUser(@Valid @RequestBody FBLoginRequest fbLoginRequest) {

        @NotBlank String fbUserId = fbLoginRequest.getUserId();
        @NotBlank String fbEmail = fbLoginRequest.getEmail();
        @NotBlank String fbName = fbLoginRequest.getName();
        /*if (!userRepository.existsByFacebookUserId(fbUserId)) {
            if (userRepository.existsByUsernameIgnoreCase(fbEmail) || userRepository.existsByEmailIgnoreCase(fbEmail)) {
                return ResponseEntity.badRequest().body("Email already used");
            }

            User user = new User();
            user.setFacebookUserId(fbUserId);

            user.setPassword(passwordEncoder.encode(user.getPassword()));

            Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new AppException("User Role not set."));

            user.setRoles(Collections.singleton(userRole));

            userRepository.save(user);
        } else {
            Optional<User> fbUser = userRepository.findByFacebookUserId(fbUserId);
            if (!fbUser.isPresent()) {
                return ResponseEntity.notFound().build();
            }
            User user = fbUser.get();
            if (!fbEmail.equals(user.getEmail())) {
                user.setEmail(fbEmail);
            }
            if (!fbEmail.equals(user.getUsername())) {
                user.setUsername(fbEmail);
            }
            userRepository.save(user);
        }

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(fbEmail, fbUserId));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));*/
        return ResponseEntity.ok("ok");
    }
}
