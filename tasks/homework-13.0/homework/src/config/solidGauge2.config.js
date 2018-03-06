const ReactHighcharts = require("react-highcharts");
require("highcharts/js/highcharts-more")(ReactHighcharts.Highcharts);
require("highcharts/js/modules/solid-gauge.js")(ReactHighcharts.Highcharts);
const SolidChart2 = {
    chart: {
        type: 'solidgauge',
        height: '300px',
    },
    title: {
        text: 20 +'%',
        style: {
            fontSize: '44px',
            color: '#5484FF'
        },
      	x: 0,
        y: 190
        
    },
    pane: {
        startAngle: 180,
        endAngle: 540,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: '#DADEE7',
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
            color: '#5484FF',
            radius: '112%',
            innerRadius: '88%',
            y: 20
        }]
    }]
}
export default SolidChart2;
