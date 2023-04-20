<template>
  <div>
    <div id="ros"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";

const dataset = ref([
  { value: 48, name: '照片/电子屏/3D建模' },
  { value: 22, name: '对抗样本' },
  { value: 30, name: '深度伪造' },
])

const colorList = ['#49b7ff', '#4bffba', '#F8B448']

function updateChart() {
  const chartDom = document.getElementById('ros');
  const myChart = echarts.init(chartDom, 'dark');
  let option;

  option = {
    title: {
      text: '系统遭受恶意攻击种类占比',
      left: 'center',
      top: '0',
      textStyle: {
        color: 'black',
        fontSize: 20
      }
    },
    backgroundColor: 'rgba(0,0,0,0)',
    legend: {
      top: 'bottom',
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
        radius: [30, 75],
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
          fontSize: 13,
          //make labels outside but not too far from the center
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

const interval = setInterval(() => {
  dataset.value[0].value = Math.floor(Math.random() * 10) + 40;
  dataset.value[1].value = Math.floor(Math.random() * 10) + 20;
  dataset.value[2].value = Math.floor(Math.random() * 10) + 20;

  updateChart();

  console.log(dataset.value[0].value, dataset.value[1].value, dataset.value[2].value)
}, 2000)

</script>

<style scoped>
 #ros {
    width: 100%;
    height: 100%;
 }
</style>
