package com.tsv.implementation.controller;

import com.tsv.implementation.Entity.Link;
import com.tsv.implementation.dao.LinkRepository;
import com.tsv.implementation.dto.UserLoginDTO;
import com.tsv.implementation.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/link")
public class LinkController
{

    @Autowired
    LinkService linkService;

    @Autowired
    LinkRepository linkRepository;

   /* @ModelAttribute("user")
    public Link userLink()
    {
        return new Link();
    }*/
   /* @GetMapping
    public String showLinkGeneratorPage(Model model)
    {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        UserDetails user = (UserDetails)securityContext.getAuthentication().getPrincipal();
        Link lo = linkRepository.findByHostName(user.getUsername());
        if(lo != null)
        {
            model.addAttribute("link" ,lo.getLink());
        }

        return "GenerateLink";
    }*/


    @PostMapping("/generate")
    public ResponseEntity<String> generateLink(@RequestBody UserLoginDTO userLoginDTO)
    {
        System.out.println(userLoginDTO.getEmail_id());
       String link = linkService.generate(userLoginDTO.getEmail_id())+"";
        return ResponseEntity.ok(link);
    }
}
