<template>
  <div>
    <div id="cookie"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import {onMounted} from "vue"

const placeHolderStyle = {
  label: {
    show: false
  },
  labelLine: {
    show: false
  },
  color: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 0
}

const dataset = [
  { value: 95, name: '识别率' },
  { value: 4,
    name: '',
    itemStyle: placeHolderStyle
  },
  { value: 2, name: '误识率' },
  { value: 4,
    name: '',
    itemStyle: placeHolderStyle
  },
  { value: 3, name: '恶意攻击率' },
  { value: 4,
    name: '',
    itemStyle: placeHolderStyle
  },
]

const colorList = ['#30AA69','#D54562', '#F3FEBe']

function setChart() {
  const chartDom = document.getElementById('cookie');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  option = {
    backgroundColor: 'rgba(0,0,0,0)',
    legend: {
      show: false
    },
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      show: true,
      feature: {
        // mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        // saveAsImage: { show: true }
      }
    },
    series: [

      {
        name: 'Pie Chart',
        type: 'pie',
        radius: [132, 135],
        center: ['50%', '50%'],
        // roseType: 'area',
        itemStyle: {
          borderRadius: 2,
          borderWidth: 5,
          shadowBlur: 30,
          borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: '#7777eb'
          }, {
            offset: 1,
            color: '#70ffac'
          }]),
          shadowColor: 'rgba(142, 152, 241, 0.6)'
        },
        label: {
          color: 'black',
          fontSize: 20,
          formatter: (params) => {
            if (params.name === '') {
              return ''
            }
            return params.name + '\n' + params.value + '%'
          }
        },
        labelLine: {
          normal: {
            length: 50
          }
        },
        color: colorList,
        data: dataset,
      },
      {
        type: 'liquidFill',
        name: '识别率',
        radius: '50%',
        center: ['50%', '50%'],
        color: [
          {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#446bf5',
              },
              {
                offset: 1,
                color: '#2ca3e2',
              },
            ],
            // globalCoord: false,
          },
        ],
        data: [dataset[0].value/100, dataset[0].value/100], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1,
          color: 'RGBA(51, 66, 127, 0.7)',
        },
        label: {
          normal: {
            formatter: function () {
              return '识别率' + '\n' + dataset[0].value + '%'
            },
            textStyle: {
              fontSize: 25,
              color: 'black',
            },
          },
        },
        outline: {
          // show: false
          borderDistance: 0,
          itemStyle: {
            borderWidth: 2,
            borderColor: '#112165',
          },
        },
      },
    ]
  };

  option && myChart.setOption(option);
}

onMounted( () => {
  setChart();
})

</script>

<style scoped>
#cookie {
  width: 100%;
  height: 100%;
}
</style>
