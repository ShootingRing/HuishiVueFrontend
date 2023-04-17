<template>
    <div id="run-speed"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

const dataset = ref([500])

function setChart() {
  const chartDom = document.getElementById('run-speed');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  const colorList = ['#00D887']

  option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: colorList,
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        // saveAsImage: {}
      }
    },
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
      // data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      show: true,
      type: 'value',
      min: 300,
      max: 700,
      interval: 100,
      //坐标轴刻度标签的相关设置
      axisLabel: {
        textStyle: {
          color: "#fff",
          fontSize: 12
        }
      },
      //坐标轴在 grid 区域中的分隔线。
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    },
    series: [
      {
        name: 'Normal Login',
        type: 'line',
        // stack: 'Total',
        data: dataset.value,
        smooth: true, //是否平滑曲线显示
        symbol: 'none',
        //面积图填充颜色 -> 渐变
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)"
              },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
      }
    ],
  };

  option && myChart.setOption(option);
}


const props = defineProps({
  data: {
    type: Number,
    default: 0
  }
})

onMounted( () => {
  setChart();
})

const timer = setInterval(() => {
  dataset.value.push(props.data)

  if (dataset.value.length > 10) {
    dataset.value.shift()
  }

  setChart()
}, 100)


</script>

<style scoped>
#run-speed {
  width: 100%;
  height: 100%;
}
</style>
