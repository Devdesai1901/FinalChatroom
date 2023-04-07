package com.tsv.implementation.dto;

public class MessageDto {

    String message;
    long link;

    String email;

    String role;

    public MessageDto() {
    }

    public MessageDto(String message, long link, String email, String role) {
        this.message = message;
        this.link = link;
        this.email = email;
        this.role = role;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getLink() {
        return link;
    }

    public void setLink(long link) {
        this.link = link;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "MessageDto{" +
                "message='" + message + '\'' +
                ", link='" + link + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
