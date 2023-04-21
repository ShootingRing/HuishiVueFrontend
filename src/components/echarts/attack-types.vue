<template>
  <div>
    <div id="ros"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

const dataset = ref([
  { value: 40, name: '照片/电子屏/3D建模' },
  { value: 30, name: '对抗样本' },
  { value: 20, name: '深度伪造' },
])

const colorList = ['#49b7ff', '#4bffba', '#F8B448']

function updateChart() {
  const chartDom = document.getElementById('ros');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  option = {
    backgroundColor: 'rgba(0,0,0,0)',
    legend: {
      left: 'right',
      orient: 'vertical',
      textStyle: {
        color: 'black',
        fontSize: 12
      }
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
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [0, 125],
        center: ['50%', '48%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 2,
          color: (params) => {
            const index = params.dataIndex;
            return colorList[index]
          },
          shadowBlur: 5,
          shadowColor: 'rgba(0, 0, 0, 0.2)'
        },
        label: {
          color: 'black',
          fontSize: 20,
          formatter: '{b}:{d}%',

          distanceToLabelLine: 2,

        },
        color: colorList[0],
        data: dataset.value,
      }
    ]
  };

  option && myChart.setOption(option);
}

onMounted( () => {
  updateChart();

})

</script>

<style scoped>
 #ros {
    width: 100%;
    height: 100%;
 }
</style>
