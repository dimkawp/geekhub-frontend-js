const ReactHighcharts = require("react-highcharts");
require("highcharts/js/highcharts-more")(ReactHighcharts.Highcharts);
require("highcharts/js/modules/solid-gauge.js")(ReactHighcharts.Highcharts);
const SolidChart = {
    chart: {
        type: 'solidgauge',
        height: '200px',

    },

    title: {
        text: '',
        style: {
            fontSize: '14px'
        }
    },


    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: 'red',
            borderWidth: 2
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: 'red',
            radius: '112%',
            innerRadius: '88%',
            y: 70
        }]
   
    }]
}
export default SolidChart;

