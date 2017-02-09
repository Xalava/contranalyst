
var ctx = document.getElementById("clauseChart");


 var options = {
    animation:{
        animateScale:true
    }
};


var data = {
    labels: [
        "common",
        "uncommon",
        "risky",
        "void"
    ],
    datasets: [
        {
            data: [150, 50, 30 ,20],
            backgroundColor: [
                "#CCCCCC",
                "#999999",
                "#FF931E",
                "#FF1D25"
            ],
            hoverBackgroundColor: [
                "#AAAAAA",
                "#555555",
                "#DD7300",
                "#DD0005"
            ]
        }]
};



$( document ).ready(function() {
    var clausesChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    }); 

});

var maturityCtx = document.getElementById("maturityChart");






var maturityData = {
    labels: ["< 6 months", "6 - 12 months", "12 - 18 months", "> 24 months"],
    datasets: [
        {
            label: "Contracts maturity",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81],
        }
    ]
};


var matursdfityData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};



var myBarChart = new Chart(maturityCtx, {
    type: 'horizontalBar',
    data: maturityData,
    options: {
        scales: {
            xAxes: [{
            }],
            yAxes: [{
            }]
        }
    }
});