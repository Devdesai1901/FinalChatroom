package com.tsv.implementation.controller;

import com.tsv.implementation.Entity.Link;
import com.tsv.implementation.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
@CrossOrigin("*")
@RestController
@RequestMapping("/topic")
public class TopicController
{
    @Autowired
    TopicService topicService;

    /*@ModelAttribute("user")
    public Link userLink()
    {
        return new Link();
    }*/

    /*@GetMapping
    public String getTopicPage()
    {
        return "SetDiscussion";
    }*/

    @PostMapping("/set")
    public ResponseEntity<String> setTopic(@RequestBody Link link )
    {
        String topic= link.getTopic();
        String hostname = link.getHostName();
        System.out.println(topic);
        System.out.println(hostname);
       String messg =  topicService.addTopic(topic , hostname);
        if(messg == "success")
        {
            /*redirectAttributes.addFlashAttribute("message", "User added Successfully");
            redirectAttributes.addFlashAttribute("alertClass", "alert-success");*/
            return ResponseEntity.ok(messg);
        }
        else
        {
            /*redirectAttributes.addFlashAttribute("message", "User is not registered");
            redirectAttributes.addFlashAttribute("alertClass", "alert-danger");*/
            return ResponseEntity.badRequest().body(messg);
        }
        //return "redirect:/topic";
    }


}
