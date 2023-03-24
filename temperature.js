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
        plugins:{
            streaming:{
                duration:30000, // escalar la grafica
                // ttl: 300000 // 5 minutros en milisegundos
            }
        },
      interaction: {
        intersect: false
      },
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
            min: 0,
            max: 100,
            beginAtZero: true
          }
      }
  }
};


// creamos una grafica
const myChart = new Chart(document.getElementById('myChart'),config_temp);