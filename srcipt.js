const client  = mqtt.connect('ws://broker.mqttdashboard.com:8000/mqtt')

function eventconect() {
  client.subscribe('ZentHub/MachineDemo/canales', function (err) {})
}

function eventmsg(topic, message) {
  // message is Buffer
  console.log(message.toString())

  var data = JSON.parse(message.toString());
  var temperature_value_data  = data[0].fields.Temperatura;
  var pressure_value_data= data[0].fields.Presion;
  var temp_hight= data[0].fields.Evento0;
  var press_hight= data[0].fields.evento1;
  var paro= data[0].fields.Paro;
  var emerg= data[0].fields.Emergencia;
  var run= data[0].fields.Marcha;
  var ciclos= data[0].fields.Ciclo;


  document.getElementById('value_txt_gauge_pressure').innerHTML = pressure_value_data;
  document.getElementById('value_txt_gauge_temp').innerHTML = temperature_value_data; 

  var deg_gauge_temp = (temperature_value_data*180)/50
  var percent_gauge_temp = (temperature_value_data*100)/50
  document.getElementById('temperature_percent').style.transform = "rotate("+deg_gauge_temp+"deg)"; 
  document.getElementById('percentage_temp_info').innerHTML = percent_gauge_temp+"%";

  var deg_gauge_press = (pressure_value_data*180)/50
  var percent_gauge_press = (pressure_value_data*100)/50
  document.getElementById('presure_percent').style.transform = "rotate("+deg_gauge_press+"deg)"; 
  document.getElementById('percentage_press_info').innerHTML = percent_gauge_press+"%"; 
  console.log("porcentaje temp"+percent_gauge_temp);
  

  if (temp_hight == "Evento 0 Activado"){
     document.getElementById('temp_advert').style.display = 'grid'; 
  }
  if (temp_hight == ""){
     document.getElementById('temp_advert').style.display = 'none';     
  }
  if (press_hight == 1){
    document.getElementById('press_advert').style.display = 'grid'; 
  }
  if (press_hight == ""){
      document.getElementById('press_advert').style.display = 'none';     
  }

  if (ciclos == 1){
    document.getElementById('cycles').style.background = '#61ff6b'; 
  }
  if (ciclos == ""){
      document.getElementById('cycles').style.background = '#aaa';     
  }
  if (run == 1){
    document.getElementById('run_plc').style.background = '#6ce182'; //valor_status_plc
    document.getElementById('valor_status_plc').style.color = '#6ce182';
    document.getElementById('valor_status_plc').innerHTML = 'Run'; 
  }
  if (run == 0){
      document.getElementById('run_plc').style.background = '#aaa';     
  }
  if (emerg == 1){
    document.getElementById('emerg_plc').style.background = '#ffb361'; 
    document.getElementById('valor_status_plc').style.color = '#ffb361';
    document.getElementById('valor_status_plc').innerHTML = 'Emergency'; 
  }
  if (emerg == 0){
      document.getElementById('emerg_plc').style.background = '#aaa';     
  }
  if (paro == 1){
    document.getElementById('stop_plc').style.background = '#ff6161'; 
    document.getElementById('valor_status_plc').style.color = '#ff6161';
    document.getElementById('valor_status_plc').innerHTML = 'Stop';
  }
  if (paro == 0){
      document.getElementById('stop_plc').style.background = '#aaa';     
  }
  // client.end() Evento0

}


client.on('connect', eventconect)
client.on('message', eventmsg)

