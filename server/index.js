const Pusher = require('pusher')
const express = require('express')
var bodyParser = require('body-parser')
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

app.use(bodyParser.json())
app.get('/aa', async (req, res) => {
    i++
    console.log(i)
    pusher.trigger('channel1', 'panne', req.body).then((data) => {

    }).catch((err) => {
        console.log(err.message)
    })
    return res.status(200).send({ success: true, message: "notification sent " })
})
app.get('/title', (req, res) => {
    console.log("got a request")
    res.status(200).send("hello")
})
app.listen(5000, () => {
    console.log('listening on port 5000')
})
