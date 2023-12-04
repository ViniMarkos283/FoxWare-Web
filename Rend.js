
//chart pie
var ctx = document.getElementsByClassName("chart-pie")
var chartGraph = new ChartG(ctx,{
    type:'doughnut',
    data: {
        labels: ['Jan','Feb','Mar','Abr'],
        datasets: [{
            label: "Taxa de Cliques - 2017",
            data: [5,10,5,14,20,15],
            borderWidth: 6,
            borderColor: "green",
            backgroundColor: 'Transparent',
        },
        {
            label: "Taxa de Cliques - 2017",
            data: [5,10,5,14,20,15],
            borderWidth: 6,
            borderColor: "green",
            backgroundColor: 'Transparent',
        },
    ]
    }
})

