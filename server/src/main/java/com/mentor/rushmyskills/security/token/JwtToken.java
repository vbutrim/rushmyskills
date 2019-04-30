package com.mentor.rushmyskills.security.token;

import java.io.Serializable;

public interface JwtToken extends Serializable {
    String getToken();
}
