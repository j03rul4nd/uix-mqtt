# Web App MQTT Broker Connect
![](./docs/portada_readme.png)

Web App MQTT Broker Connect is an application that allows you to connect to an MQTT broker and display real-time data in a user interface. The application is built using HTML, CSS, JavaScript, and MQTT.js.

## What does this repository do?
Our web application follows the topic "MachineDemo/channels" through the free HiveMQ broker. This topic is designed to receive a JSON containing values for temperature, pressure, events, machine status, cycles and more.

If the values are sent in the appropriate JSON format to this topic, our application will process them and display them in real time in the web app user interface. In this way, we can monitor the state of the machine and its environment quickly and efficiently, allowing us to make informed decisions in real time.

In short, the web app receives machine and environment status data via the "MachineDemo/channels" topic of the free HiveMQ broker, and displays it in real-time on the web app user interface for easy viewing and monitoring.

In addition, the web app is designed to update the data automatically as new data arrives on the topic. In this way, users can have a real-time view of the machine and its environment without having to manually refresh the page.

By following the "MachineDemo/channels" topic, our application makes sure that it only receives data that is relevant to the monitoring of the machine. At the same time, the use of the free HiveMQ broker provides an efficient and scalable solution for handling machine data.

Overall, our web application is designed to make machine monitoring easier and more efficient for users by providing a clear and up-to-date real-time user interface with relevant data from the machine and its environment.


## Usage
To use the Web App MQTT Broker Connect, you need to install it on a server and access the corresponding URL. The application has been tested with Apache2 on Ubuntu, but it should work with other web servers as well.
1. Clone the repository to your server.
```
git clone https://github.com/j03rul4nd/uix-mqtt.git
```
2. Install Apache2 and PHP on your server if they are not already installed.
3. Copy the contents of the repository to your Apache2 document root (typically /var/www/html/).
```
sudo cp -r uix-mqtt/* /var/www/html/
```
4. Open a web browser and navigate to your server's IP address or hostname.

### Important
Once the application is installed on the web server, it can be accessed via the server URL. By following the "MachineDemo/channels" topic of the free HiveMQ broker, the application will display in real time the relevant data on the state of the machine and its environment.

It is important to make sure that the JSON sent to the broker is in the right format so that the application can process the data correctly. 

In order for the web app to be able to display the data correctly, the JSON sent to the broker must be in the following format:
```
{
  "fields": {
    "Temperatura": [value],
    "Presion": [value],
    "Evento0": [value],
    "Evento1": [value],
    "Paro": [value],
    "Emergencia": [value],
    "Marcha": [value],
    "Ciclo": [value]
  }
}
```
Where [value] represents the current value of each property in the appropriate format. For example, if "Temperature" is a number, then [value] must be a number.

In addition, it is important to ensure that the JSON is sent to the "MachineDemo/channels" topic via the free HiveMQ broker so that it can be received and processed correctly by the web app.

In short, to send data to the web app, you must send a properly formatted JSON and ensure that it is sent to the correct topic via the HiveMQ broker.


## Disclaimer
The use of this application is free and open, but it is important to note that the author is not responsible for any use or problems that may arise in connection with its use. It is recommended to review the code and usage instructions before implementing the application in a production environment.