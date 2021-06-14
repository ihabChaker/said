import * as PusherPushNotifications from "@pusher/push-notifications-web"
import Pusher from 'pusher-js';
import React, { useEffect, useState } from "react";
import socketClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function App() {


  return (
    <div>
      <h1>Hello</h1>
    </div>
  );

}
export default App;