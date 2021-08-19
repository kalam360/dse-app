<template>
  <canvas class="my-4 w-100" ref="myChart" width="900" height="380"></canvas>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
    name: 'ChartVue',
    mounted(){
        var chart = this.$refs.myChart;
        var ctx = chart.getContext('2d');
        var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
       onClick: (event) => {
        var activePoints = myChart.getElementsAtEventForMode(event, "point", myChart.options);
        if(activePoints.length > 0) {
            var firstPoint = activePoints[0];
            var label = myChart.data.labels[firstPoint._index];
            var value = myChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
            alert(label + ": " + value);
        }
    },
      legend: {
        display: false
      }
    }
  }) 


    }

}
</script>

<style>


</style>