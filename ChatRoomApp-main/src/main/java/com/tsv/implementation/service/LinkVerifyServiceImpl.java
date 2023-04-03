package com.tsv.implementation.service;

import com.tsv.implementation.Entity.Link;
import com.tsv.implementation.Entity.MessageCount;
import com.tsv.implementation.Entity.User;
import com.tsv.implementation.dao.LinkRepository;
import com.tsv.implementation.dao.MessageCountRepository;
import com.tsv.implementation.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class LinkVerifyServiceImpl implements  LinkVerifyService{

    @Autowired
    LinkRepository linkRepository;

    @Autowired
    MessageCountRepository messageCountRepository;
    @Autowired
    UserRepository userRepo;
    @Override
    public String checking(int pin , String email) {
        String message = null;
       Link verifyLink =  linkRepository.findByLink(pin);
      System.out.println(verifyLink.getLink());
       if(verifyLink == null)
       {
           message = "linkerror";
       }
       else
       {
           System.out.println("hello0");
          String host =  verifyLink.getHostName();
           /*SecurityContext securityContext = SecurityContextHolder.getContext();
           UserDetails user = (UserDetails)securityContext.getAuthentication().getPrincipal();*/
           User users = userRepo.findByEmail(email);
           System.out.println(users.getEmail());
          MessageCount mssa =  messageCountRepository.findByUserName(users.getEmail());
          if(mssa == null)
          {
              System.out.println("hello1");
              message = "usererror";
          }
          else
          {
              System.out.println("hello2");
              message = "success";
          }

       }
        return message;
    }
}
