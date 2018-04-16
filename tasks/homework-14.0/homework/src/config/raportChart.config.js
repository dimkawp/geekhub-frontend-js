
const RaportChart = {
    chart: {
        height: '700px',
        type: 'area',
        backgroundColor: '#2F3242'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        gridLineWidth: 1,
        allowDecimals: false,
        labels: {
            style: {
                color: '#9BA1B1',
                fontSize: '20px',
                textTransform: 'uppercase'
            }
        },
        categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],

    },
    yAxis: {
        gridLineWidth: false,
        title: {
            text: ''
        },
        labels: {
        },
    },
    tooltip: {
        pointFormat: ''
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'name',
        color: '#237FCA',
        data: [2040, 11233, 22224, 27342,
        26662, 12956, 6912]
    }]
}

export default RaportChart;