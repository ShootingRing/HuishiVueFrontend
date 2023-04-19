<template>
<!--  <div>-->
    <div id="progress"></div>
<!--  </div>-->
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, onUnmounted, ref} from "vue"

const props = defineProps({
    detection: {
        type: Number,
        default: 1
    },
})

const data = ref([5,99,8]);

if(props.detection === 1){
  data.value = [5,3,8];
}

const colorList = [
  new echarts.graphic.LinearGradient(
      1,
      0,
      0,
      0,
      [
        {
          offset: 0,
          color: "#edf75d"
        },
        {
          offset: 1,
          color: "rgba(226,234,176,0.55)"
        }
      ]
  ),
  new echarts.graphic.LinearGradient(
      1,
      0,
      0,
      0,
      [
        {
          offset: 0,
          color: "#5ab2e8"
        },
        {
          offset: 1,
          color: "rgba(166,199,236,0.59)"
        }
      ]
  ),
  new echarts.graphic.LinearGradient(
      1,
      0,
      0,
      0,
      [
        {
          offset: 0,
          color: "#5ae8d3"
        },
        {
          offset: 1,
          color: "rgba(166,236,220,0.59)"
        }
      ]
  )
]

function setChart() {
  const chartDom = document.getElementById('progress');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  option = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    backgroundColor: 'rgba(0,0,0,0)',
    xAxis: {
      show: false,
      type: 'value',
      max: 100,
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: '18',
            color: 'white',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: ['活体检测', '对抗样本', '深度伪造'],
      },
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderRadius: 10,
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{@score}%',
          textStyle: {
            color: 'white',
            fontSize: '15',
          },
        },
        itemStyle: {
          normal: {
            barBorderRadius: 10,
            color: function (params) {
              return colorList[params.dataIndex]
            },
          },
        },
        barWidth: 20,
        data: data.value,
      },
    ],
  };

  option && myChart.setOption(option);
}

onMounted( () => {
  setChart()
})

const length = ref(5)


// onUnmounted(() => {
//   clearInterval(interval)
// })
</script>

<style scoped>
#progress {
  width: 100%;
  height: 100%;

  margin-top: 20px;
}
</style>
