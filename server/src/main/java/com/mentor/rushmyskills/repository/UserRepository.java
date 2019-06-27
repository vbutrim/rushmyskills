package com.mentor.rushmyskills.repository;

import com.mentor.rushmyskills.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByNameOrEmail(String name, String email);

    List<User> findByIdIn(List<Long> userIds);

    Optional<User> findById(Long userId);

    Optional<User> findByFbUserId(String fbUserId);

    Boolean existsByEmailIgnoreCase(String email);

    Boolean existsByFbUserId(String facebookUserId);
}
