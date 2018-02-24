var Sum = 1502;
const SalesChart = {
    chart: {
        type: 'pie',
        height: '300',
        defaultSeriesType: 'areaspline'
    },
    plotOptions: {
        pie: {
          shadow: false,
          colors: ['#25396e', '#3755a4', '#4164c2', '#4164c2', '#4b74e0', '#5584ff']
        }
    },
    subtitle: {
        text: Sum,
        style: { "color": "#8391AF", "fontSize": "36px", "fontWeight": "700", "fontFamily": "Roboto, sans-serif" },
        verticalAlign: 'middle',
        floating: true,
        x: -85,
        y: 0
    },
    title: {
        text: 'Sales',
        style: { "color": "#8391AF", "fontSize": "20px", "fontFamily": "Roboto, sans-serif" },
        verticalAlign: 'middle',
        floating: true,
        x: -85,
        y: 20
    },
    legend: {
        align: 'right',
        itemStyle: {
            color: "#8391AF",
            fontSize: "20px",
            fontWeight: "400",
            fontFamily: "Roboto, sans-serif"
        },
        layout: 'vertical',
        verticalAlign: 'middle',
        itemMarginTop: 5,
        itemMarginBottom: 5
    },
    series: [{
        data: [
          ["Websites",6],["Logo", 4],["Social Media",7],["Adwords", 2], ["E-Commerce", 5]
        ],
        innerSize: '55%',
        showInLegend:true,
        dataLabels: {
          enabled: false
        }
      }],
      credits: {
        enabled: false
      }
};
export default SalesChart;