
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("wrapper").style.marginLeft = "0";
}

// ----------------------------------------


        var randomScalingFactor = function(factor) {
            return Math.round(Math.random() * factor);
        };

//voorraad-pie chart
        var pieData = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                    ],
                    backgroundColor: [
                        window.chartColors.orange,
                        window.chartColors.green,
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    "Aantal blikken eten",
                    "Aantal flessen water"
                ]
            },
            options: {
                responsive: true,
            }
        };


//brandstof-line chart
        var HOURS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
        var lineData = {
            type: 'line',
            data: {
                labels: ["6", "7", "8", "9", "10", "11", "12"],
                datasets: [{
                    label: "Aantal brandstof in liter per uur",
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000)
                    ],
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:''
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Uur'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Liter'
                        },
                    ticks: {
                            beginAtZero: true,
                            steps: 10,
                            stepValue: 5,
                            max: 50000
                        }
                    }]
                }
            }
        };

//zwaartekracht-bar chart
        var SECONDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var color = Chart.helpers.color;
        var barData = {
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [{
                    label: 'Zwaartekracht in meter per seconde',
                    backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                    borderColor: window.chartColors.red,
                    borderWidth: 1,
                    data: [
                        randomScalingFactor(1),
                        randomScalingFactor(1),
                        randomScalingFactor(1),
                        randomScalingFactor(1),
                        randomScalingFactor(1),
                        randomScalingFactor(1),
                        randomScalingFactor(1)
                    ]
                }],
                options: {
                    responsive: true,
                    legend: {
                            position: 'top',
                    },
                    title: {
                        display: true,
                        text: ''
                    }
                }
            }
            
        };

        var last_speed = randomScalingFactor(50000);


//snelheid - area chart
        var HOURS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
        var areaData = {
            type: 'line',
            data: {
                labels: ["6", "7", "8", "9", "10", "11", "12"],
                datasets: [{
                    label: "Snelheid in KM per uur",
                    borderColor: window.chartColors.green,
                    backgroundColor: window.chartColors.green,
                    data: [
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        last_speed
                    ], 
                }]
            },
                options: {
                    responsive: true,
                    title:{
                        display:true,
                        text:""
                    },
                    tooltips: {
                        mode: 'index',
                    },
                    hover: {
                        mode: 'index'
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Uur'
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Kilometer'
                            },
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 50000
                            }
                        }]
                    }
                }
        };


//FUNCTIES AANROEPEN
window.onload = function() {

            var inner_speed = document.getElementById('inner-snelheid');
            inner_speed.innerHTML = last_speed;

            var barChart = document.getElementById("chart2").getContext("2d");
            window.myBar = new Chart(barChart, barData);
            // {
            //     type: 'bar',
            //     data: barChartData,
            //     options: {
            //         responsive: true,
            //         legend: {
            //             position: 'top',
            //         },
            //         title: {
            //             display: true,
            //             text: ''
            //         }
            //     }
            //};

            var lineChart = document.getElementById("chart3").getContext("2d");
            window.myLine = new Chart(lineChart, lineData);

            var pieChart = document.getElementById("chart4").getContext("2d");
            window.myPie = new Chart(pieChart, pieData);

            var areaChart = document.getElementById("chart1").getContext("2d");
            window.myArea = new Chart(areaChart, areaData);
        


//addAreaData - chart1 snelheid
        document.getElementById('addAreaData').addEventListener('click', function() {
            if (areaData.data.datasets.length > 0) {
                var hour = HOURS[areaData.data.labels.length % HOURS.length];
                areaData.data.labels.push(hour);

                var new_speed;

                areaData.data.datasets.forEach(function(dataset) {
                    new_speed = randomScalingFactor(50000);
                    dataset.data.push(new_speed);
                });

                inner_speed.innerHTML = new_speed;

                window.myArea.update();
            }
        });

//removeAreaData - chart1 snelheid
        document.getElementById('removeAreaData').addEventListener('click', function() {
            areaData.data.labels.splice(-1, 1); // remove the label first

            areaData.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myArea.update();
        });
        

//addBarData - chart2 zwaartekracht
        document.getElementById('addBarData').addEventListener('click', function() {
            if (barChartData.datasets.length > 0) {
                var month = MONTHS[barChartData.labels.length % MONTHS.length];
                barChartData.labels.push(month);

                for (var index = 0; index < barChartData.datasets.length; ++index) {
                    //window.myBar.addData(randomScalingFactor(), index);
                    barChartData.datasets[index].data.push(randomScalingFactor(1));
                }

                window.myBar.update();
            }
        });


//removeBarData - chart2 zwaartekracht
        document.getElementById('removeBarData').addEventListener('click', function() {
            barChartData.labels.splice(-1, 1); // remove the label first

            barChartData.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myBar.update();
        });

//addLineData - chart3 brandstof
        document.getElementById('addLineData').addEventListener('click', function() {
            if (lineData.data.datasets.length > 0) {
                var month = MONTHS[lineData.data.labels.length % MONTHS.length];
                lineData.data.labels.push(month);

                lineData.data.datasets.forEach(function(dataset) {
                    dataset.data.push(randomScalingFactor(50000));
                });

                window.myLine.update();
            }
        });

//removeLineData - chart3 brandstof
        document.getElementById('removeLineData').addEventListener('click', function() {
            lineData.data.labels.splice(-1, 1); // remove the label first

            lineData.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        });

//addPieData - chart4 voorraad eten en water
    document.getElementById('addPieData').addEventListener('click', function() {
        if (pieData.data.datasets.length > 0) {
            pieData.data.labels.push('data #' + pieData.data.labels.length);

            var colorName = colorNames[pieData.data.datasets[0].data.length % colorNames.length];;
            var newColor = window.chartColors[colorName];

            pieData.data.datasets.forEach(function(dataset) {
                dataset.data.push(randomScalingFactor());
                dataset.backgroundColor.push(newColor);
            });

            window.myPie.update();
        }
    });
//removePieData - chart4 voorraad eten en water
    document.getElementById('removePieData').addEventListener('click', function() {
        pieData.data.labels.splice(-1, 1); // remove the label first

        pieData.data.datasets.forEach(function(dataset) {
            dataset.data.pop();
            dataset.backgroundColor.pop();
        });

        window.myPie.update();
    });
};



      

 
