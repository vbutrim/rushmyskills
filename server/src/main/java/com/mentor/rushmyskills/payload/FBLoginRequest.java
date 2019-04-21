package com.mentor.rushmyskills.payload;

import lombok.Data;
import javax.validation.constraints.NotBlank;

@Data
public class FBLoginRequest {
    @NotBlank
    private String userId;

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    private String pictureUrl;
}
