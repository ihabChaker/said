import * as PusherPushNotifications from "@pusher/push-notifications-web"
import Pusher from 'pusher-js';
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function App() {
  try {
    const socket = socketIOClient(ENDPOINT)

    socket.on("event", (data) => {
      console.log(data)
    })
  } catch (err) {
    console.log(err.message)
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );

}
export default App;