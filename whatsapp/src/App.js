import React, { useEffect, useState } from 'react';
import './App.scss';
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from './axios'
import Pusher from 'pusher-js'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('2c104c7628359d679878', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');

    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="landing__header" >
        <span className="whatsapp-logo">
          <img src="./whatsapp.png" alt="whatsapp-logo" />
        </span>
        <div className="landing__headerTitle">
          WHATSAPP WEB
      </div>
      </div>
      <div className="landing__app">
        <div className="app__body">
          <Sidebar />
          <div className="vl" />
          <Chat messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
