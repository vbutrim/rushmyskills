package com.mentor.rushmyskills.security.extractor;

public interface TokenExtractor {
    String extract(String payload);
}