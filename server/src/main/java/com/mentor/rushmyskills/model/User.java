package com.mentor.rushmyskills.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "fbUserId"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
@Data
@RequiredArgsConstructor
public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank
        @Size(max = 50)
        @NonNull
        private String fbUserId;

        @NotBlank
        @Size(max = 50)
        @NonNull
        private String name;

        @NotBlank
        @Size(max = 50)
        @Email
        @NonNull
        private String email;

        @NotBlank
        @Size(max = 50)
        @NonNull
        private String pictureUrl;
}
