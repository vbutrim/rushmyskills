package com.mentor.rushmyskills.security.config;

import com.mentor.rushmyskills.security.token.JwtToken;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
public class JwtSettings {

    @Value("${security.jwt.accessTokenExpirationTime}")
    private Integer accessTokenExpTime;

    /**
     * {@link JwtToken} can be refreshed during this timeframe.
     */
    @Value("${security.jwt.refreshTokenExpirationTime}")
    private Integer refreshTokenExpTime;

    /**
     * Token issuer.
     */
    @Value("${security.jwt.tokenIssuer}")
    private String tokenIssuer;

    /**
     * Key is used to sign {@link JwtToken}.
     */
    @Value("${security.jwt.tokenSigningKey}")
    private String tokenSigningKey;

    @Value("${security.jwt.corsAllowedOrigin}")
    private String corsAllowedOrigin;
}
