package com.tsv.implementation.controller;

//import com.chat.app.chatroomapp.App.model.Message;
import com.tsv.implementation.Model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//@CrossOrigin("*")
@RestController
//@RequestMapping("/messageConto")
public class MessageControllers
{
    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message getContent(@Payload Message message)
    {

        try
        {

            //procssing like saving message to data base
            Thread.sleep(100);
        }
        catch(InterruptedException e)
        {
            e.printStackTrace();
        }
        return  message;
    }
}
