import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
export default function VerifyLink() {

  const location = useLocation();
  const { role, data } = location.state;
  const data2 = {}
  
  var res = "";
  const verify = async(e) =>{
    e.preventDefault();

    const token = "Bearer " + localStorage.getItem("Token");
    console.log(token);


    const headers = {

      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }

    
    console.log(data.email_id);
    console.log(data.password)
    console.log(role);

    const inputElement = document.querySelector('input[name="verifylink"]');
    const linkValue = inputElement.value;
    console.log(linkValue);
    /*const linkData = {
      'link':  `${linkValue}`
    };*/

    const data1 = {
      email_id: data.email_id,
      password: data.password,
      otp:data.otp,
      link: `${linkValue}`
    }

    data2 = {
      email_id: data.email_id,
      password: data.password,
      role:role
    }



    try {
      res = await axios.post("/verifyLink/verify", data1,{ headers })
        .then((res) => {
          console.log(res)

          if(res.data == "success")
          {
            Navigate("/chatRoom");
          }
          else if (res == "linkerror")
          {
            alert("Enter link is not correct");
          }
          else if (res == "usererror")
          {
            alert("user is not invited !!");
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
            <h2 className="font-bold text-2xl text-[#5b5656]">
              Enter the Link
            </h2>
            <div action="/verifyLink/verify" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="verifylink"
                placeholder="Enter the Link"
                // onChange={(event) => {
                //   setTopic(event.target.value);
                // }}
              />
              <button className="bg-[#5b5656] rounded-xl text-white hover:scale-105 duration-300 py-2" onClick={verify}  >
                 {/* <Link to="/chatroom">         state={{ name: name }} */}
                  Enter Chat Room
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
