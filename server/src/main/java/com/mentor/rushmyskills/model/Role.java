package com.mentor.rushmyskills.model;

public enum Role {
    ADMIN,
    MENTEE,
    MENTOR,
    PARENT;

    public String authority() {
        return "ROLE_" + this.name();
    }
}
