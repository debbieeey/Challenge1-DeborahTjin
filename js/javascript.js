
/*De functie randomScalingFactor zorgt ervoor dat die de som Math.round terug geeft. 
Deze functie heeft als parameter 'factor'. Dit geeft een maxium aantal waar in 
de chart een random getal uit kan halen.
*/
        var randomScalingFactor = function(factor) {
            return Math.round(Math.random() * factor);
        };


//voorraad-pie chart. Data om de pie chart te kunnen tekenen
        var pieData = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                    ],
                    backgroundColor: [
                        window.chartColors.grey,
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


//brandstof-line chart. Data om de line chart te kunnen tekenen
        var HOURS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
        var last_fuel = randomScalingFactor(50000); //geeft de laatste brandstof in de chart aan 
        var lineData = {
            type: 'line',
            data: {
                labels: ["6", "7", "8", "9", "10", "11", "12"],
                datasets: [{
                    label: "Aantal brandstof in liter per uur",
                    backgroundColor: window.chartColors.purple,
                    borderColor: window.chartColors.purple,
                    data: [
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        randomScalingFactor(50000),
                        last_fuel
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

//zwaartekracht-bar chart. Data om de bar chart te kunnen tekenen
        var SECONDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        var last_gravity = randomScalingFactor(100);//geeft de laatste zwaartekracht in de chart aan
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
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                        randomScalingFactor(100),
                        last_gravity
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

        


//snelheid - area chart. Data om de area chart te kunnen tekenen
        var HOURS = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
        var last_speed = randomScalingFactor(50000); //geeft de laatste snelheid in de chart aan
        var areaData = {
            type: 'line',
            data: {
                labels: ["6", "7", "8", "9", "10", "11", "12"],
                datasets: [{
                    label: "Snelheid in KM per uur",
                    borderColor: window.chartColors.darkGreen,
                    backgroundColor: window.chartColors.darkGreen,
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


//FUNCTIES AANROEPEN. 
//De charts worden getekend
window.onload = function() {
            var barChart = document.getElementById("chart2").getContext("2d");
            window.myBar = new Chart(barChart, barData);

            var lineChart = document.getElementById("chart3").getContext("2d");
            window.myLine = new Chart(lineChart, lineData);

            var pieChart = document.getElementById("chart4").getContext("2d");
            window.myPie = new Chart(pieChart, pieData);

            var areaChart = document.getElementById("chart1").getContext("2d");
            window.myArea = new Chart(areaChart, areaData);
        


//addAreaData - chart1 snelheid
//Een button om data aan de area chart toe te voegen
//Wanneer er data wordt toegevoegd, zal de id innnerSpeed ook veranderen. Deze geeft dan de 
//huidige snelheid aan. 
        var inner_speed = document.getElementById('inner-speed');
            innerSpeed.innerHTML = last_speed;

        document.getElementById('addAreaData').addEventListener('click', function() {
            if (areaData.data.datasets.length > 0) {
                var hour = HOURS[areaData.data.labels.length % HOURS.length];
                areaData.data.labels.push(hour);

                var newSpeed;

                areaData.data.datasets.forEach(function(dataset) {
                    newSpeed = randomScalingFactor(50000);
                    dataset.data.push(newSpeed);
                });

                innerSpeed.innerHTML = newSpeed;

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
        var inner_gravity = document.getElementById('innerGravity');
            innerGravity.innerHTML = last_gravity;

        document.getElementById('addBarData').addEventListener('click', function() {
            if (barData.data.datasets.length > 0) {
                var second = SECONDS[barData.data.labels.length % SECONDS.length];
                barData.data.labels.push(second);

                var newGravity;

                // for (var index = 0; index < barData.data.datasets.length; ++index) {
                //     barData.data.datasets[index].data.push(randomScalingFactor(100));
                //     newGravity = randomScalingFactor(100);
                //     dataset.data.push(newGravity);
                // }
                barData.data.datasets.forEach(function(dataset) {
                    newGravity = randomScalingFactor(100);
                    dataset.data.push(newGravity);
                });

                innerGravity.innerHTML = newGravity;

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
        var inner_fuel = document.getElementById('innerFuel');
            innerFuel.innerHTML = last_fuel;

        document.getElementById('addLineData').addEventListener('click', function() {
            if (lineData.data.datasets.length > 0) {
                var hour = HOURS[lineData.data.labels.length % HOURS.length];
                lineData.data.labels.push(hour);

                var newFuel;

                lineData.data.datasets.forEach(function(dataset) {
                    newFuel = (randomScalingFactor(50000));
                    dataset.data.push(newFuel);
                });

                innerFuel.innerHTML = newFuel;

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



      

 
