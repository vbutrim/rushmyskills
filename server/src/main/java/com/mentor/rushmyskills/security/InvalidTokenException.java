package com.mentor.rushmyskills.security;

import org.springframework.security.core.AuthenticationException;

public class InvalidTokenException extends AuthenticationException {
    InvalidTokenException(String message, Throwable t) {
        super(message, t);
    }

    public InvalidTokenException(String s) {
        super(s);
    }
}