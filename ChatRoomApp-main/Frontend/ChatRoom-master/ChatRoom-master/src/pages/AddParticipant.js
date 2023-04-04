

import React, { useState } from "react";
import Border from "../Components/Border";
import axios from 'axios';
import "../Style/User_register.css";
import {  Link, useLocation } from "react-router-dom";

export default function AddParticipant() {
  const location = useLocation();
  const { role, data, link } = location.state;
  let data2 = {}
  var res = "";
  const addUser = async (e) => {
    e.preventDefault();
    const participant = e.target.elements.participant.value;
    console.log(participant);
    const token = "Bearer " + localStorage.getItem("Token");
    console.log(token);

    const headers = {
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }

    console.log(data.email_id);
    console.log(data.password)
    console.log(role);

    const data1 = {
      link: link,
      userName: participant
    }

    const username = data.email_id;
    const password = data.password;

    // data2 = {
    //   email_id: username,
    //   password: password,
    //   role: `${role}`
    // }

    

    try {
      res = await axios.post("/count/validate", data1, { headers })
        .then((res) => {
          console.log(res.data)
          if (res.data == "success") {
            alert("User added successfully")
          }
          else {
            alert("Server error !!!")
          }

        })
      // console.log(name);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <section className="bg-[#5b5656] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-screen px-16">
            <h2 className="font-bold text-2xl text-[#2c2b2b]">
              Add Participants
            </h2>
            <Border />
            <form onSubmit={addUser}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter here"
                  className="rounded-xl border"
                  name="participant"
                  aria-placeholder="Enter Participants"
                ></input>
                <button className="bg-[#2c2b2b] rounded-xl text-white hover:scale-105 duration-300 py-2" type="submit">
                  Add User
                </button>
                <Link to="/topic" state={{ role: role, data: data, link: link }}>
                <button className="bg-[#2c2b2b] rounded-xl text-white hover:scale-105 duration-300 py-2">
                 
                    Next
                 
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

