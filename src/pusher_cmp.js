import * as PusherPushNotifications from "@pusher/push-notifications-web"
import Pusher from "pusher-js"
function App() {
    const pusher = new Pusher("APP_KEY", {
        cluster: "APP_CLUSTER"
    });
    const channel = pusher.subscribe('votes');
    channel.bind("vote - event", function (data) {
        return data
    });
    const beamsClient = new PusherPushNotifications.Client({
        instanceId: INSTANCE_ID,
    })
    beamsClient.start()
        .then(() => beamsClient.addDeviceInterest("votes"))
        .then(() => {

        });
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}><States data=
                {data} /></div>
        </div >
    );

}
export default App;