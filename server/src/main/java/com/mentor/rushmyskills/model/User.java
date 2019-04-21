package com.mentor.rushmyskills.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "userId"
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
        private String userId;

        @NotBlank
        @Size(max = 50)
        @NonNull
        private String name;

        @NotBlank
        @Size(max = 50)
        @Email
        @NonNull
        private Email email;

        @NotBlank
        @Size(max = 50)
        @NonNull
        private String pictureUrl;
}
