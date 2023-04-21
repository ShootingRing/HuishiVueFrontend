<template>
  <div>
    <div id="attack"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted( () => {

  const chartDom = document.getElementById('attack');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  const colorList = ['#00D887', '#ee6666']

  option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: colorList,
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['正常登录次数', '攻击次数'],
      textStyle: {
        color: 'black',
        fontSize: 11
      },
      orient: 'vertical',
      left: 'right'
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
      type: 'category',
      boundaryGap: false,
      //单位： 小时
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
      //坐标轴轴线相关设置。就是数学上的x轴
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,.5)'
        }
      },
      //坐标轴刻度标签的相关设置
      axisLabel: {
        textStyle: {
          color: "black",
          fontSize: 12
        }
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 20,
      interval: 4,
      //坐标轴刻度标签的相关设置
      axisLabel: {
        textStyle: {
          color: "black",
          fontSize: 12
        }
      },
      //坐标轴在 grid 区域中的分隔线。
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,.1)'
        }
      }
    },
    series: [
      {
        name: '正常登录次数',
        type: 'line',
        // stack: 'Total',
        data:[11, 10, 15, 17, 19, 18, 13, 8, 12, 11, 8, 7],
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
      },
      {
        name: '攻击次数',
        type: 'line',
        // stack: 'Total',
        data: [3, 6, 4, 1, 2, 5, 0, 1, 6, 2, 2, 1],
        smooth: true,
        symbol: 'none',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "rgba(216,0,0,0.39)"
              },
                {
                  offset: 0.8,
                  color: "rgba(216,0,0,0.1)"
                }
              ],
              false
          ),
          shadowColor: "rgba(0, 0, 0, .1)"
        },
      },
    ]
  };

  option && myChart.setOption(option);
})
</script>

<style scoped>
#attack {
  width: 100%;
  height: 100%;
}
</style>
