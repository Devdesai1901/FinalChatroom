import React, { useRef, useState } from "react";
import Border from "../Components/Border";
import "../Style/User_register.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function OtpScreen() {
  const location = useLocation();
  const { role, data } = location.state;
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const val1Ref = useRef(null);
  const val2Ref = useRef(null);
  const val3Ref = useRef(null);
  const val4Ref = useRef(null);

  const focusNext = (event, nextRef) => {
    const input = event.target;
    if (input.value.length >= input.maxLength) {
      nextRef.current.focus();
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const val1 = String(e.target.val1.value);
    const val2 = String(e.target.val2.value);
    const val3 = String(e.target.val3.value);
    const val4 = String(e.target.val4.value);

    const token = "Bearer " + localStorage.getItem("Token");
    console.log(token);
    const temp = val1 + val2 + val3 + val4;
    console.log(temp);


   
    console.log(data.email);
    console.log(data.password)

      const data1 = {
        email_id: data.email,
        password: data.password,
        otp: temp,
      };


    


    const headers = {

      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }
   
    var res = [];
    try {

      
      await axios.post("/login/otpVerification",data1 ,{headers});
      // console.log(name);
      setStatus(res.status);

      if (role == "HOST") {
        navigate("/generatelink", { state: { role: role, data: data1} } );
      }
      else {
        navigate("/Verifylink", { state: { role: role, data: data1 } });
      }
      // else if(role == "ADMIN")
      // {
      //   navigate("/admindashboard")
      // }
    } catch (err) {
      alert(err);
    }

    
    
  };
  return (
    <>
      <section className="bg-[#5b5656] min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-2xl p-4 items-center">
          <div className="md:w-screen px-16">
            <h1 className="font-bold text-2xl text-[#5b5656]">
              Verify Account
            </h1>
            <Border />
            <br />
            <br />
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-row h-50 justify-center">
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val1"
                  ref={val1Ref}
                  onInput={(event) => focusNext(event, val2Ref)}
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val2"
                  ref={val2Ref}
                  onInput={(event) => focusNext(event, val3Ref)}
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val3"
                  ref={val3Ref}
                  onInput={(event) => focusNext(event, val4Ref)}
                />
                <input
                  type="text"
                  className="p-2 w-10 rounded-xl border-2 text-center"
                  maxLength="1"
                  name="val4"
                  ref={val4Ref}
                />
              </div>

              <button className="bg-[#5b5656] rounded-xl text-white hover:scale-105 duration-300 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
