<template>
  <div>
    <div id="bar"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {onMounted, onUnmounted, ref} from "vue"
import { dataInJs } from '~/assets/data/data.js'

const colorList = [
  new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "#edf75d"
        },
        {
          offset: 1,
          color: "rgba(226,234,176,0.35)"
        }
      ]
  ),
  new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "#5ab2e8"
        },
        {
          offset: 1,
          color: "rgba(166,199,236,0.39)"
        }
      ]
  ),
  new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "#5ae8d3"
        },
        {
          offset: 1,
          color: "rgba(166,236,220,0.39)"
        }
      ]
  )
]

var PreUsers = dataInJs().map(
    item => {
      if (item.detection == 1)
          return item.name
      else
          return item.id + ' ' + item.attack
    }
)
var users = PreUsers.slice(0, 3)
console.log(users)

const dataset = ref([
  {value: 85, itemStyle: {color: colorList[0]}},
  {value: 98, itemStyle: {color: colorList[0]}},
  {value: 99, itemStyle: {color: colorList[0]}},
  {value: 95, itemStyle: {color: colorList[0]}},
])

const dataset2 = ref([
  {value: 85, itemStyle: {color: colorList[1]}},
  {value: 98, itemStyle: {color: colorList[1]}},
  {value: 99, itemStyle: {color: colorList[1]}},
  {value: 82, itemStyle: {color: colorList[1]}},
])

const dataset3 = ref([
  {value: 83, itemStyle: {color: colorList[2]}},
  {value: 85, itemStyle: {color: colorList[2]}},
  {value: 63, itemStyle: {color: colorList[2]}},
  {value: 86, itemStyle: {color: colorList[2]}},
])

function setChart() {
  const chartDom = document.getElementById('bar');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: users,
      axisLabel: {
        color: 'black',
      },
    },
    yAxis: {
      type: 'value',
      min: 60,
      max: 100,
      axisLabel: {
        color: 'black',
      },
    },
    tooltip: {
      trigger: 'axis'
    },
    backgroundColor: 'rgba(0,0,0,0)',
    color: colorList,
    series: [
      {
        name: '照片/电子屏/3D建模',
        data: dataset.value,
        type: 'bar',
        itemStyle: {
          barBorderRadius: 3,
        },
        // markLine: {
        //   symbol: "none",               //去掉警戒线最后面的箭头
        //   label: {
        //     color: 'black',
        //     position: "end"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
        //   },
        //   data: [{
        //     silent: false,             //鼠标悬停事件  true没有，false有
        //     lineStyle: {               //警戒线的样式  ，虚实  颜色  粗细
        //       type: "dashed",
        //       color: "#f66966",
        //       width: 2
        //     },
        //     yAxis: 86          // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
        //   }]
        // }
      },
      {
        name: '对抗样本',
        data: dataset2.value,
        type: 'bar',
        itemStyle: {
          barBorderRadius: 3,
        },
      },
      {
        name: '深度伪造',
        data: dataset3.value,
        type: 'bar',
        itemStyle: {
          barBorderRadius: 3,
        },
      },
    ],
    legend: {
      data: ['照片/电子屏/3D建模', '对抗样本', '深度伪造'],
      textStyle: {
        color: 'black',
      },
      left: 'right',
      orient: 'vertical'
    }
  }

  option && myChart.setOption(option);
}

onMounted( () => {
  setChart()
})

const length = ref(5)

const interval = setInterval(() => {

  if(length.value >= 12) {
    length.value = 0
  }
  users.push(PreUsers[length.value])//循环添加数据

  dataset.value.push({value: Math.floor(Math.random() * 20) + 80, itemStyle: {color: colorList[0]}})
  // dataset.value[dataset.value.length - 1].itemStyle.color = computedColor(dataset.value[dataset.value.length - 1].value)

  dataset2.value.push({value: Math.floor(Math.random() * 20) + 80, itemStyle: {color: colorList[1]}})
  // dataset2.value[dataset2.value.length - 1].itemStyle.color = computedColor(dataset2.value[dataset2.value.length - 1].value)

  dataset3.value.push({value: Math.floor(Math.random() * 20) + 80, itemStyle: {color: colorList[2]}})
  // dataset3.value[dataset3.value.length - 1].itemStyle.color = computedColor(dataset3.value[dataset3.value.length - 1].value)

  if(users.length >= 5){
    //delete the first 5 elements
    users.splice(0, 1)
    dataset.value.splice(0, 1)
    dataset2.value.splice(0, 1)
    dataset3.value.splice(0, 1)
  }

  length.value++

  console.log(dataset.value)

 setChart()
}, 5000)

// onUnmounted(() => {
//   clearInterval(interval)
// })
</script>

<style scoped>
#bar {
  width: 100%;
  height: 100%;

  margin-top: 20px;
}
</style>
