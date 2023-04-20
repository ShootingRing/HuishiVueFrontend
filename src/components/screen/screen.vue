<template>
<div class="content">
  <div class="header">
    <span class="demonstration">BigScreen</span>
  </div>
  <div class="wrapper">
    <div class="top">
      <div class="table1">
        <Ros class="ros charts"></Ros>
      </div>
      <div class="table1">
        <AttackTimes class="attack charts"></AttackTimes>
      </div>
    </div>
    <div class="middle">
      <div class="table3-1">
        <Bar class="bar charts"></Bar>
      </div>
      <div class="table3-2">
        <Cookie class="cookie charts"></Cookie>
      </div>
    </div>
    <div class="bottom">
      <div class="table2-1">
            <div class="container">
              <div class="top-con">
              </div>
              <div class="bottom-con">
              </div>
          </div>
      </div>
      <div class="table2-2">
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onUnmounted, reactive} from "vue"
import Ros from "~/components/echarts/attack-types.vue"
import AttackTimes from "~/components/echarts/attack-times.vue"
import Bar from '~/components/echarts/confidence-level.vue'
import Cookie from "~/components/echarts/misdentification-and-attacks.vue"
import router from "~/router/index.js"
import {dataInJs} from "~/assets/data/data.js";

/*中上表格数据*/
const preDataset = ref(dataInJs())

const dataset = ref(preDataset.value.slice(0).concat(preDataset.value.slice(0, 4)))
console.log(dataset.value)

function normalRandom(mean, variance) {
  const u1 = Math.random();
  const u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return mean + z * variance;
}

onUnmounted(() => {
  clearInterval(interval)
})

/*筛选得列表数据*/
const listDataSet = ref(Array.from(dataset.value.filter(item => item.detection === 2 || item.detection === 3).values()))

/*进行页面跳转：点击中上图表中一个单元时，显示详情*/
const clickHandler = (id) => {
  console.log('click' + id)

  /*由wrapper下的<router-view>接收，其使用absolute定位*/
  router.push(
      {
        name: 'details',
        query: {
          id: id
        }
      }
  )
}

const back = () => {
  router.back()
}

</script>

<style scoped lang="less">
  .content {
    width: 100%;
    height: 100%;

    // background-image: url("src/assets/imgs/bg_0.jpg");

    //font-family: '楷体', sans-serif;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    position: relative;
  }

  .charts {
    width: 100%;
    height: 100%;
  }

  .top {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;


    .table1 {
      width: 50%;
      border: black 1px solid;
    }
  }
  .middle {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;

    .table3-1 {
      width: 50%;
      height: 100%;
      border: black 1px solid;
    }

    .table3-2 {
      width: 50%;
      height: 100%;
      border: black 1px solid;
    }
  }

  .bottom {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;

    .table2-1 {
      width: 50%;
      border: black 1px solid;
    }

    .table2-2{
      width: 50%;
      border: black 1px solid;
    }
  }
</style>
