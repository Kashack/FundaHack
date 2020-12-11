const express = require('express');
const app = express.Router();
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
}, {
  apiHost: BASE_URL
})

function sendMessage(toNumber, fromNumber, content){
    vonage.channel.send(
        { "type": "whatsapp", "number": toNumber },
        { "type": "whatsapp", "number": fromNumber },
        {
          "content": {
            "type": "text",
            "text": content
          }
        },
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(data.message_uuid);
          }
        }
      );
}

app.post('/webhooks/inbound-message', (req, res) => {
    console.log(req.body);
    //check if req.body.from.number is in database

    // pass req.body.message.content.text to bot and get result
    let result = "Hello Vonage"

    //send message back with result
    sendMessage(req.body.from.number,"441234", result)
});

app.post('/webhooks/message-status', (req, res) => {
    console.log(req.body);
    res.status(200).end();
});
