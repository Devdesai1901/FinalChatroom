import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import Messages from "../Components/Messages";
import "./ChatRoom.scss";
//import React, { useEffect, useState } from 'react'
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

var res = ""
var res1 = ""
var stompClient = null;
const ChatRoom = () => {
  const [publicChats, setPublicChats] = useState([]);
  const [rankData, setRankData] = useState([]);
  const location = useLocation();
  const { role, data, link, topic } = location.state;
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    setUserData({ ...userData, "connected": true });
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    /*stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);*/
    userJoin();
    autoUpdate();
  }

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }


  const onError = (err) => {
    console.log(err);

  }

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "message": value });
  }
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE"
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, "message": "" });
      setMessageCount();
      autoRefresh();
    }
  }

  const username = data.email_id
  console.log(username);
  const tempMessage = userData.message
  console.log(tempMessage)
  const linke = link
  console.log(link)
  console.log(role)
  const roletemp = role

  const dataTransfer = {
    message: `${tempMessage}`,
    email: `${username}`,
    link: `${linke}`,
    role: `${roletemp}`
  }


  // for set count and sending message

  function setMessageCount() {
    try {
      res = axios.put("api/groups/messages", dataTransfer)
        .then((res) => {
          console.log("success")
        });
    }
    catch
    {
      alert("server error")
    }
  }




  function autoUpdate() {
    fetch("/count/rank")
      .then((response) => response.json())
      .then((rankData) => setRankData(rankData));
  }



  function autoRefresh() {
    setInterval(() => {
      autoUpdate();
    }, 1000)
  }







  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, "username": value });
  }

  const registerUser = () => {
    connect();
  }

  return (
    <div className="container">
      {userData.connected ?
        <div className="chat-box">

          {
            <div className="chat-content">
              <div className="topic">
                <h2>Topic : </h2>
              </div>
              <ul className="chat-messages">
                {publicChats.map((chat, index) => (
                  <li className={`message ${chat.senderName === userData.username && "self"}`} key={index}>
                    {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input type="text" className="input-message" placeholder="enter the message" value={userData.message} onChange={handleMessage} />

                <button type="button" className="send-button" onClick={sendValue}>Send</button>
                <button type="button" className="exit-button" >Exit</button>

              </div>
            </div>
          }
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>USERNAME</th>
                  <th>COUNT</th>
                </tr>
              </thead>
              <tbody>
                {rankData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userName}</td>
                    <td>{item.messageCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

        :
        <section className="bg-[#5b5656] min-h-screen flex items-center justify-center">
          <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-2xl p-4 items-center justify-center">
            <div className="md:w-screen px-16">
              <h1 className="font-bold text-2xl text-[#5b5656]">
                Enter Your name
              </h1>
              <input
                className="border border-gray-500 w-full py-2 px-3 rounded-lg"
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={userData.username}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="bg-[#5b5656] hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6" onClick={registerUser} >
                connect
              </button>
            </div>
          </div>
        </section>}
    </div>
  );
}


export default ChatRoom