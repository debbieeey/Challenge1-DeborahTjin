
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

//voorraad-pie chart
var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var pieData = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.orange,
                    window.chartColors.green,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Eten",
                "Water"
            ]
        },
        options: {
            responsive: true,
        }
    };


//brandstof-line chart
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var lineData = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
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
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

//zwaartekracht-bar chart
       var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]
        };

//brandstof - area chart
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var areaData = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My Third dataset",
                    borderColor: window.chartColors.green,
                    backgroundColor: window.chartColors.green,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
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
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };


//FUNCTIES AANROEPEN
    window.onload = function() {
            var barData = document.getElementById("chart2").getContext("2d");
            window.myBar = new Chart(barData, {
                type: 'bar',
                data: barChartData,
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
            });

            var ctx = document.getElementById("chart3").getContext("2d");
            window.myLine = new Chart(ctx, lineData);

            var ctx = document.getElementById("chart4").getContext("2d");
            window.myPie = new Chart(ctx, pieData);

            var ctx = document.getElementById("chart1").getContext("2d");
            window.myArea = new Chart(ctx, areaData);
        


//addAreaData - chart1 snelheid
        document.getElementById('addAreaData').addEventListener('click', function() {
            if (areaData.data.datasets.length > 0) {
                var month = MONTHS[areaData.data.labels.length % MONTHS.length];
                areaData.data.labels.push(month);

                areaData.data.datasets.forEach(function(dataset) {
                    dataset.data.push(randomScalingFactor());
                });

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
                    barChartData.datasets[index].data.push(randomScalingFactor());
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
                    dataset.data.push(randomScalingFactor());
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



      

 
