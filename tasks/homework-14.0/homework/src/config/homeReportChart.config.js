const ReportChart = {
    chart: {
        type: 'spline',
        height: '550',
        defaultSeriesType: 'areaspline',
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
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#9BA1B1',
                fontSize: '20px',
                textTransform: 'uppercase'
            }
        },
        categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    },
    yAxis: {
        gridLineWidth: false,
        title: {
            text: ''
        },
        labels: {
            style: {
                color: '#2F3242'
            }
        },

    },
    tooltip: {
        headerFormat: 'header',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m',
        backgroundColor: '#9BA1B1'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: false
            }
        }
    },

    series: [{
        visible: true,
        marker: {
            enabled: false
        },
        name: ' ',
        color: '#2196F3',
        lineWidth: 3,
        data: [
            [10],
            [0.28],
            [20.25],
            [10.2],
            [30.28]
        ]
    }]
}
export default ReportChart;