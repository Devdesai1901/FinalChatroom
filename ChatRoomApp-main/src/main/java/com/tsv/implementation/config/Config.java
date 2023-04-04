package com.tsv.implementation.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
//@ComponentScan("com.chat.app.chatroomapp.config")
@EnableWebSocketMessageBroker
public class Config implements WebSocketMessageBrokerConfigurer
{

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry)
    {

        registry.addEndpoint("/ws").withSockJS();    //.setAllowedOrigins("*")
    }
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry)
    {

        registry.enableSimpleBroker("/chatroom");
        registry.setApplicationDestinationPrefixes("/app");
    }
}
