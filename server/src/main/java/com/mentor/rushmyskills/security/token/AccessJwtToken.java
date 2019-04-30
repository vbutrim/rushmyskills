package com.mentor.rushmyskills.security.token;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.mentor.rushmyskills.security.token.JwtToken;
import io.jsonwebtoken.Claims;

public class AccessJwtToken implements JwtToken {

    private final String rawToken;

    @JsonIgnore
    private Claims claims;

    public AccessJwtToken(@JsonProperty("access_token") String rawToken) {
        this.rawToken = rawToken;
    }

    public AccessJwtToken(final String token, Claims claims) {
        this.rawToken = token;
        this.claims = claims;
    }

    public String getToken() {
        return this.rawToken;
    }

    public Claims getClaims() {
        return claims;
    }
}
