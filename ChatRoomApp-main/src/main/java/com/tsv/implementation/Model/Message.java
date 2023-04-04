package com.tsv.implementation.Model;

public class Message
{
    /*private String name;
    private String content;

    public Message(String name, String content)
    {
        this.name = name;
        this.content = content;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }*/


    private String senderName;
    private String reciverName;

    private String message;

    private String date;

    private Status status;

    public Message() {
    }

    public Message(String senderName, String reciverName, String message, String date, Status status) {
        this.senderName = senderName;
        this.reciverName = reciverName;
        this.message = message;
        this.date = date;
        this.status = status;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getReciverName() {
        return reciverName;
    }

    public void setReciverName(String reciverName) {
        this.reciverName = reciverName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Message{" +
                "senderName='" + senderName + '\'' +
                ", reciverName='" + reciverName + '\'' +
                ", message='" + message + '\'' +
                ", date='" + date + '\'' +
                ", status=" + status +
                '}';
    }
}
