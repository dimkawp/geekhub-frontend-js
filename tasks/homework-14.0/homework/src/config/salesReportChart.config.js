const SalesChart = {
    chart: {
        height: '400',
        backgroundColor: '#2F3242'
    },
    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    yAxis: {
        title: {
            text: ''
        },
    },
    plotOptions: {
        column: {
            states: {
                hover: {
                    color: '#2195F2'
                }
            }
        }
    },

    series: [{
        type: 'column',
        color: '#4F5363',
        colorByPoint: false,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: false
    }]


}
export default SalesChart;