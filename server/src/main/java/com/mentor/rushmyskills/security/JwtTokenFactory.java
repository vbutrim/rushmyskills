package com.mentor.rushmyskills.security;

import com.mentor.rushmyskills.security.config.JwtSettings;
import com.mentor.rushmyskills.security.token.AccessJwtToken;
import com.mentor.rushmyskills.security.token.JwtToken;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class JwtTokenFactory {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenFactory.class);

    private final JwtSettings settings;

    @Autowired
    public JwtTokenFactory(JwtSettings settings) {
        this.settings = settings;
    }

    private AccessJwtToken createAccessJwtToken(UserContext userContext) {
        if (StringUtils.isBlank(userContext.getFbUserId()))
            throw new IllegalArgumentException("Cannot create JWT Token without FbUserId");

        Claims claims = Jwts.claims().setSubject(userContext.getFbUserId());
        claims.put("scopes", userContext.getAuthorities().stream().map(Object::toString).collect(Collectors.toList()));

        String token = Jwts.builder()
                .setClaims(claims)
                .setIssuer(settings.getTokenIssuer())
                .setIssuedAt(Date.from(LocalDateTime.now().toInstant(ZoneOffset.UTC)))
                .setExpiration(Date.from(LocalDateTime.now().plusDays(settings.getAccessTokenExpTime()).toInstant(ZoneOffset.UTC)))
                .signWith(SignatureAlgorithm.HS512, settings.getTokenSigningKey())
                .compact();

        return new AccessJwtToken(token, claims);
    }

    private JwtToken createRefreshToken(UserContext userContext) {
        if (StringUtils.isBlank(userContext.getFbUserId())) {
            throw new IllegalArgumentException("Cannot create JWT Token without FbUserId");
        }

        Claims claims = Jwts.claims().setSubject(userContext.getFbUserId());
        claims.put("scopes", Collections.singletonList(Scopes.REFRESH_TOKEN.authority()));

        String token = Jwts.builder()
                .setClaims(claims)
                .setIssuer(settings.getTokenIssuer())
                .setId(UUID.randomUUID().toString())
                .setIssuedAt(Date.from(LocalDateTime.now().toInstant(ZoneOffset.UTC)))
                .setExpiration(Date.from(LocalDateTime.now().plusDays(settings.getRefreshTokenExpTime()).toInstant(ZoneOffset.UTC)))
                .signWith(SignatureAlgorithm.HS512, settings.getTokenSigningKey())
                .compact();

        return new AccessJwtToken(token, claims);
    }

    public Map<String, String> createTokenPair(UserContext userContext) {
        JwtToken accessToken = createAccessJwtToken(userContext);
        JwtToken refreshToken = createRefreshToken(userContext);

        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("accessToken", accessToken.getToken());
        tokenMap.put("refreshToken", refreshToken.getToken());
        return tokenMap;
    }
}
