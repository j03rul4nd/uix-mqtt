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
        responsive: true,
        scales: {
            x: {
                type: 'realtime',
                realtime:{
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
                beginAtZero: true
            }
        }
    }
};



const myChart_preassure = new Chart(document.getElementById('chart_preassure'),config_preassure);