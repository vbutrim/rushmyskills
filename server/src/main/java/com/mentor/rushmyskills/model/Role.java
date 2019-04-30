package com.mentor.rushmyskills.model;

public enum Role {
    ADMIN,
    MENTEE,
    MENTOR;

    public String authority() {
        return "ROLE_" + this.name();
    }
}
