const client  = mqtt.connect('wss://broker.mqttdashboard.com:8000/mqtt')

function eventconect() {
  //el topic al que nos suscribimos
  client.subscribe('MachineDemo/canales', function (err) {})
}

function eventmsg(topic, message) {
  // message is Buffer
  console.log(message.toString())

  var data = JSON.parse(message.toString());
  var temperature_value_data  = data[0].fields.Temperatura;
  var pressure_value_data= data[0].fields.Presion;
  var temp_hight= data[0].fields.Evento0;
  var press_hight= data[0].fields.Evento1;
  var paro= data[0].fields.Paro;
  var emerg= data[0].fields.Emergencia;
  var run= data[0].fields.Marcha;
  var ciclos= data[0].fields.Ciclo;




  function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
}

  document.getElementById('value_txt_gauge_pressure').innerHTML = redondearDecimales(pressure_value_data,3);
  document.getElementById('value_txt_gauge_temp').innerHTML = redondearDecimales(temperature_value_data, 3);

  var deg_gauge_temp = (temperature_value_data*180)/100;
  var percent_gauge_temp = redondearDecimales(temperature_value_data, 2);
  document.getElementById('temperature_percent').style.transform = "rotate("+deg_gauge_temp+"deg)"; 
  document.getElementById('percentage_temp_info').innerHTML = percent_gauge_temp+"%";

  var deg_gauge_press = (pressure_value_data*180)/100;
  var percent_gauge_press =  redondearDecimales(pressure_value_data,2);
  document.getElementById('presure_percent').style.transform = "rotate("+deg_gauge_press+"deg)"; 
  document.getElementById('percentage_press_info').innerHTML = percent_gauge_press+"%"; 
  console.log("porcentaje temp"+percent_gauge_temp);
  

  if (temp_hight == 1){
     document.getElementById('temp_advert').style.display = 'grid'; 
  }
  if (temp_hight == 0){
     document.getElementById('temp_advert').style.display = 'none';     
  }
  if (press_hight == 1){
    document.getElementById('press_advert').style.display = 'grid'; 
  }
  if (press_hight == 0){
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

$("#pause_graph_press").click(function(){
  myChart_preassure.options.plugins.streaming.pause = true;
  document.getElementById('pause_graph_press').style.display = "none";
  document.getElementById('play_graph_press').style.display = "flex";
  // $(this).off('click');
})
$("#play_graph_press").click(function(){
  myChart_preassure.options.plugins.streaming.pause = false;
  document.getElementById('play_graph_press').style.display = "none";
  document.getElementById('pause_graph_press').style.display = "flex";
  // $(this).off('click');
})

$("#screen_maximizar_press").click(function(){
  
  document.getElementById('screen_maximizar_press').style.display = "none";
  document.getElementById('screen_minimizar_press').style.display = "flex";
  // $(this).off('click');
})
$("#screen_minimizar_press").click(function(){
 
  document.getElementById('screen_minimizar_press').style.display = "none";
  document.getElementById('screen_maximizar_press').style.display = "flex";
  // $(this).off('click');
})
// temperature operators
$("#pause_graph_temp").click(function(){
  myChart.options.plugins.streaming.pause = true;
  document.getElementById('pause_graph_temp').style.display = "none";
  document.getElementById('play_graph_temp').style.display = "flex";
  // $(this).off('click');
})
$("#play_graph_temp").click(function(){
  myChart.options.plugins.streaming.pause = false;
  document.getElementById('play_graph_temp').style.display = "none";
  document.getElementById('pause_graph_temp').style.display = "flex";
  // $(this).off('click');
})

$("#screen_maximizar_temp").click(function(){
  
  document.getElementById('screen_maximizar_temp').style.display = "none";
  document.getElementById('screen_minimizar_temp').style.display = "flex";
  // $(this).off('click');
})
$("#screen_minimizar_temp").click(function(){
 
  document.getElementById('screen_minimizar_temp').style.display = "none";
  document.getElementById('screen_maximizar_temp').style.display = "flex";
  // $(this).off('click');
})
