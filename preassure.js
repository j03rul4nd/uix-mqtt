const data = {
    datasets: [{
        label: 'Pressure',
        data: [],
        backgroundColor: '#0070B1',
        borderColor: '#0070B1',
    }]
};
// var v = document.getElementById('value_txt_gauge_pressure').innerHTML 

const config_preassure = {
    type: 'line',
    data,
    // data,
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
                    // delay: 5000,
                    onRefresh: chart => {
                        chart.data.datasets.forEach(dataset => {
                            dataset.data.push ({
                                x: Date.now(),
                                y: document.getElementById('value_txt_gauge_pressure').innerHTML 
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



const myChart_preassure = new Chart(document.getElementById('chart_preassure'),config_preassure);