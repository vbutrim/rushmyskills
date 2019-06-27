package com.mentor.rushmyskills.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "USERS", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "Email"
        })
})
@Data
@NoArgsConstructor
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
        @Size(max = 250)
        @NonNull
        private String pictureUrl;
}
