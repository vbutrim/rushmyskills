package com.mentor.rushmyskills.security.token;

import com.mentor.rushmyskills.security.InvalidTokenException;
import com.mentor.rushmyskills.security.RawAccessJwtToken;
import com.mentor.rushmyskills.security.Scopes;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import lombok.Getter;
import org.springframework.security.authentication.BadCredentialsException;

import java.util.List;
import java.util.Optional;

@Getter
public class RefreshJwtToken implements JwtToken {

    private Jws<Claims> claims;

    private RefreshJwtToken(Jws<Claims> claims) {
        this.claims = claims;
    }

    /**
     * Creates and validates Refresh token
     *
     * @param token
     * @param signingKey
     *
     * @throws BadCredentialsException
     * @throws InvalidTokenException
     *
     * @return
     */
    public static Optional<RefreshJwtToken> create(RawAccessJwtToken token, String signingKey) {
        Jws<Claims> claims = token.parseClaims(signingKey);

        List<String> scopes = claims.getBody().get("scopes", List.class);
        if (scopes == null || scopes.isEmpty()
                || scopes.stream().noneMatch(scope -> Scopes.REFRESH_TOKEN.authority().equals(scope))) {
            return Optional.empty();
        }

        return Optional.of(new RefreshJwtToken(claims));
    }

    @Override
    public String getToken() {
        return null;
    }

    public String getJti() {
        return claims.getBody().getId();
    }

    public String getSubject() {
        return claims.getBody().getSubject();
    }
}
