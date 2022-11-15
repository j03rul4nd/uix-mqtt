const config_temp = {  
  type: 'line',
    data: {
         datasets: [{
          label: 'Temperature',
          backgroundColor: '#0070B1',
          borderColor: '#0070B1',
          data: [],
         }]
        } ,
    options: {
      responsive: true,
      scales: {
          x: {
              type: 'realtime',
              realtime:{
                  onRefresh: chart => {
                      chart.data.datasets.forEach(dataset => {
                          dataset.data.push ({
                              x: Date.now(),
                              y: document.getElementById('value_txt_gauge_temp').innerHTML 
                          });
                      });
                  }
              }
          },
          y: {
              beginAtZero: true
          }
      }
  }
};


// creamos una grafica
const myChart = new Chart(document.getElementById('myChart'),config_temp);