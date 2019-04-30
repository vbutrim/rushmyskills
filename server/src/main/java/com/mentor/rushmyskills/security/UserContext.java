package com.mentor.rushmyskills.security;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.List;

@Getter
@RequiredArgsConstructor
@EqualsAndHashCode(of = {"fbUserId"})
public class UserContext implements Serializable {

    @NonNull
    private String fbUserId;

    @NonNull
    private List<GrantedAuthority> authorities;

    public static UserContext create(String fbUserId, List<GrantedAuthority> authorities) {
        if (StringUtils.isBlank(fbUserId)) {
            throw new IllegalArgumentException("FbUserId is blank: " + fbUserId);
        }
        return new UserContext(fbUserId, authorities);
    }

    // private Collection<? extends GrantedAuthority> authorities;

/*    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }*/
}