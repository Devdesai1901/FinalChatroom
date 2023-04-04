package com.tsv.implementation.controller;

import com.tsv.implementation.Entity.Link;
import com.tsv.implementation.dto.UserLoginDTO;
import com.tsv.implementation.service.LinkVerifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
@CrossOrigin("*")
@RestController
@RequestMapping("/verifyLink")
public class LinkVerfiController {

    @Autowired
    LinkVerifyService linkVerifyService;
    @ModelAttribute("user")
    public Link verifier()
    {
        return new Link();
    }
   /* @GetMapping
    public String verifyLinkPage()
    {
        return "verifyLink";
    }*/

    //BindingResult result, RedirectAttributes redirectAttributes
    @PostMapping("/verify")
    public ResponseEntity<String> check(@RequestBody UserLoginDTO userLoginDTO)
    {
        //int ln = Integer.parseInt(link);
         int data = userLoginDTO.getLink();
         System.out.println(data);
         System.out.println(userLoginDTO.getEmail_id());
         String messg = linkVerifyService.checking(data,userLoginDTO.getEmail_id());
        if(messg == "success")
        {
            /*redirectAttributes.addFlashAttribute("message", "User Authorized Successfully");
            redirectAttributes.addFlashAttribute("alertClass", "alert-success");*/
            //return "redirect:/api";
            return ResponseEntity.ok(messg);
        }
        else if(messg == "linkerror")
        {
            /*redirectAttributes.addFlashAttribute("message", "Entered Link is not correct");
            redirectAttributes.addFlashAttribute("alertClass", "alert-danger");*/
            return ResponseEntity.badRequest().body(messg);
        } else if (messg == "usererror")
        {
           /* redirectAttributes.addFlashAttribute("message", "User is not invited to meet");
            redirectAttributes.addFlashAttribute("alertClass", "alert-danger");*/
            return ResponseEntity.badRequest().body(messg);
        }

        return ResponseEntity.ok(messg);
       // return "redirect:/verifyLink";
        //return ResponseEntity.badRequest().body(messg);
    }


}
