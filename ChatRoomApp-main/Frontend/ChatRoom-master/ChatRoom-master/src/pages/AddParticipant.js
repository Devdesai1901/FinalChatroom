import React, { useState } from "react";
import Border from "../Components/Border";
import axios from 'axios';
import "../Style/User_register.css";
import { createRoutesFromChildren, Link, useLocation } from "react-router-dom";

export default function AddParticipant() {
  const location = useLocation();
  const { role, data, generatedLink } = location.state;
  var res = "";
  const addUser = async (e) => {

    e.preventDefault();

    const token = "Bearer " + localStorage.getItem("Token");
    console.log(token);
    //console.log(links)

    const headers = {

      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }

    console.log(data.email_id);
    console.log(data.password)
    console.log(role);

    const data1 = {
      link: `${generatedLink}`,
      userName: data.email_id
    }

    try {
      res = await axios.post("/count/validate", data1, { headers })
        .then((res) => {
          if (res == "success")
          {
            alert("user added successfully")
          }
          else
          {
            alert("Server error !!!")
          }
  
        });
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
            {/* <p className="text-sm mt-4 text-[#5b5656]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <div action="" className="flex flex-col gap-4">
              {/* <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Full Name"/> */}
              <textarea
                placeholder="Enter here"
                className="rounded-xl border"
                name="participant"
                aria-placeholder="Enter Participants"
              ></textarea>
              {/* <input className="p-2 rounded-xl border" type="text" name="mobileNo" placeholder="Enter Phone No."/> */}


                
              <button className="bg-[#2c2b2b] rounded-xl text-white hover:scale-105 duration-300 py-2" onClick={addUser}>
               
                  AddUser
          
              </button>
              <button className="bg-[#2c2b2b] rounded-xl text-white hover:scale-105 duration-300 py-2">
                <Link to="/chatroom" state={{ role: role,data:data }}>
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
