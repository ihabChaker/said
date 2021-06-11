const Pusher = require('pusher')
const express = require('express')

const app = express()
const appId = "1208096"
const key = "3eece4878496d724be7c"
const secret = "1130fe383343c520ec5c"
const cluster = "eu"
const pusher = new Pusher({
    appId,
    key,
    secret,
    cluster,
    useTLS: true
})
let i = 0

app.get('/aa', async (req, res) => {
    i++
    pusher.trigger('channel1', 'event', {
        "message": i
    }).then((data) => {

    }).catch((err) => {
        console.log(err.message)
    })
})
app.listen(5000, () => {
    console.log('listening on port 5000')
})
