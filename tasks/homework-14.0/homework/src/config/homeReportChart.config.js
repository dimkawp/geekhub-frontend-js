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
        type: 'datetime',
        dateTimeLabelFormats: {
            month: '%e. %b',
            year: '%b'
        },
        //categories: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
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
        backgroundColor: 'red'
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
            [Date.UTC(1970, 9, 21), 10],
            [Date.UTC(1970, 10, 4), 0.28],
            [Date.UTC(1970, 10, 9), 20.25],
            [Date.UTC(1970, 10, 27), 10.2],
            [Date.UTC(1970, 11, 2), 30.28],
            [Date.UTC(1970, 11, 26), 20.28]
        ]
    }]
}
export default ReportChart;