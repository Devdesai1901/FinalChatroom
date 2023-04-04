import React, { useState } from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function SelectTopic() {
  const location = useLocation();
  const { role, data, link } = location.state;
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  var res = ""

  const addTopic = async (e) =>
  {
    

    e.preventDefault();


    const token = "Bearer " + localStorage.getItem("Token");
    console.log(token);

    console.log(data.email_id);
    console.log(data.password)
    console.log(role);

    const headers = {
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }
    const hostName = data.email_id
     
    const data1 = {
      hostName: `${hostName}`,
      topic: `${topic}`
    }


    try {
      res = await axios.post("/topic/set", data1, { headers })
        .then((res) => {
          console.log(res.data)
          if (res.data == "success") {
            
            
            navigate("/chatRoom" ,  {state : { role: role, data: data, link: link, topic: topic }})
            alert(" topic added successfully")
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
            <h2 className="font-bold text-2xl text-[#5b5656]">
              Enter the topic of discussion
            </h2>
            {/* <p className="text-sm mt-4 text-[#5b5656]">
              If you are already member, login yourself
            </p> */}
            <Border />
            <div action="" className="flex flex-col gap-4">
              {/* <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter Full Name"/> */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="topic"
                placeholder="Enter Your Topic of discussion"
                onChange={(event) => {
                  setTopic(event.target.value);
                }}
              />
              {/* <input className="p-2 rounded-xl border" type="text" name="mobileNo" placeholder="Enter Phone No."/> */}
              <Link to="/chatRoom" state={{ role: role , data : data , link : link ,topic : topic}}>
              <button className="bg-[#5b5656] rounded-xl text-white hover:scale-105 duration-300 py-2" onClick={addTopic} >
                  Enter Chat Room 
              </button>
              </Link>
            </div>
            {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
