const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://broker.mqttdashboard.com')

function eventconect() {
  client.subscribe('ZentHub/MachineDemo/canales', function (err) {})
}

function eventmsg(topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
}


client.on('connect', eventconect)
client.on('message', eventmsg)