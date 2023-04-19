<template>
<div class="content">
  <div class="wrapper">
    <router-view class="details" @click="back"></router-view>
    <div class="left">
      <div class="table1 panel">
        <Ros class="ros charts"></Ros>
      </div>
      <div class="table1 panel">
        <AttackTimes class="attack charts"></AttackTimes>
      </div>
      <div class="table1-3 panel">
        <div class="number">
          <dv-digital-flop :config="config1"></dv-digital-flop>
        </div>
        <div class="number number2">
          <run-speed :data="config1.number[0]"></run-speed>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="table2-1">
        <div class="container">
          <div class="top-con">
            <div class="cell"
                 v-for="item in dataset"
                 :key="item"
                 @click="clickHandler(item.id)"
            >
              <img class="img-det" src="src/assets/imgs/icons/det1-1.png" alt="det1" v-if="item.detection == 1">
              <img class="img-det" src="src/assets/imgs/icons/det2-1.png" alt="det2" v-else-if="item.detection == 2">
              <div class="in-cell">
                <img :src="'src/assets/imgs/faces/'+item.id+'.jpg'"  alt="head" class="head"/>
<!--                <el-divider></el-divider>-->
<!--                <div class="det" v-if="item.detection == 1">-->
                <div class="det">
                  <p class="txt name">{{item.name}}</p>
<!--                  <el-divider class="shorter"></el-divider>-->
<!--                  <p class="txt position">{{item.position}}</p>-->
<!--                  <el-divider class="shorter"></el-divider>-->
                  <p class="txt id">{{item.employeeID}}</p>
<!--                  <el-divider class="shorter"></el-divider>-->
                </div>
<!--                <div class="det" v-else-if="item.detection == 2">-->
<!--                  <div style="color: #FF505F; font-size: 18px">{{item.attack}}</div>-->
<!--                </div>-->
<!--                <div class="un-det" v-else>-->
<!--                  <img src="../../assets/imgs/icons/det3-1.png" alt="" class="un-img"/>-->
<!--                </div>-->
              </div>
            </div>
          </div>
          <div class="bottom-con">
            <div class="cell"
                 v-for="item in dataset2"
                 :key="item"
                 @click="clickHandler(item.id)"
            >
              <img class="img-det" src="src/assets/imgs/icons/det1-1.png" alt="det1" v-if="item.detection == 1">
              <img class="img-det" src="src/assets/imgs/icons/det2-1.png" alt="det2" v-else-if="item.detection == 2">
              <div class="in-cell">
                <img :src="'src/assets/imgs/faces/'+item.id+'.jpg'"  alt="head" class="head"/>
<!--                <el-divider></el-divider>-->
<!--                <div class="det" v-if="item.detection == 1">-->
                <div class="det">
                  <p class="txt name">{{item.name}}</p>
<!--                  <el-divider class="shorter"></el-divider>-->
<!--                  <p class="txt position">{{item.position}}</p>-->
<!--                  <el-divider class="shorter"></el-divider>-->
                  <p class="txt id">{{item.employeeID}}</p>
<!--                  <el-divider class="shorter"></el-divider>-->
                </div>
<!--                <div class="det" v-else-if="item.detection == 2">-->
<!--                  <div style="color: #FF505F; font-size: 18px">{{item.attack}}</div>-->
<!--                </div>-->
<!--                <div class="un-det" v-else>-->
<!--                  <img src="../../assets/imgs/icons/det3-1.png" alt="" class="un-img"/>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="table2-2 panel">
        <ScrollBoard></ScrollBoard>
      </div>
    </div>
    <div class="right">
      <div class="table3-1 panel">
        <Bar class="bar charts"></Bar>
      </div>
      <div class="table3-2 panel">
        <Cookie class="cookie charts"></Cookie>
      </div>
      <div class="table3-3 panel">
        <div class="title">
          <p class="txt">最近访问人脸信息比对</p>
        </div>
        <div class="imgs">
          <dv-border-box8 :dur="8" style="width: 40%;">
            <el-image src="src/assets/imgs/faces/img_2.png" class="img">
            </el-image>
          </dv-border-box8>
          <dv-border-box8 :dur="8" style="width: 40%;">
              <el-image src="src/assets/imgs/faces/img.png" class="img">
              </el-image>
          </dv-border-box8>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed } from "vue"
import Ros from "~/components/echarts/attack-types.vue"
import AttackTimes from "~/components/echarts/attack-times.vue"
import Bar from '~/components/echarts/confidence-level.vue'
import Cookie from "~/components/echarts/misdentification-and-attacks.vue"
import ScrollBoard from "~/components/echarts/scroll-board.vue"
import RunSpeed from "~/components/echarts/run-speed.vue"
import router from "~/router/index.js"
import {dataInJs} from "~/assets/data/data.js";

/*左下数字翻牌器config*/
/*在setInterval中进行更新*/
const config1 = reactive({
  number: [500],
  content: '系统识别运行速度：{nt}ms',
  style: {
    fill: '#fff',
    fontSize: 18,
    fontFamily: 'Microsoft YaHei',
    fontWeight: 'bold',
  }
})


/*中上表格数据*/
const preDataset = ref(dataInJs())

const dataset = ref(preDataset.value.slice(0).concat(preDataset.value.slice(0, 4)))
console.log(dataset.value)
const dataset2 = ref(preDataset.value.slice(4).concat(preDataset.value.slice(0, 8)))

const flipInterval = setInterval(() => {
  //更新数字翻牌器
  config1.number[0] = normalRandom(500, 50);

}, 2000)

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

    background-image: url("src/assets/imgs/bg_0.jpg");

    //font-family: '楷体', sans-serif;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: relative;

    //background-color: rgba(0, 0, 0, 0.5);
    //表格背景颜色

    //折线图 面积
    //折线图字调大一点

    //内部通知 ： 白色字  并且  大一点

    //红色 绿色
    //折线 平滑一点 => 就是华丽一点

    //背景偏暗 + 调亮一点 + 图表标题
    //智冶的颜色和背景
  }

  .details {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 999;
  }

  .charts {
    width: 100%;
    height: 100%;
  }

  .left {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .table1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .table1-3 {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      align-items: center;

      .number {
        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        width: 50%;
        height: 30%;

        margin: auto auto;
      }

      .number2 {
        width: 100%;
        height: 70%;
      }
    }

    //border: #13B5B1 1px solid;
  }

  .middle {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    //border: #13B5B1 1px solid;
  }

  .right {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .table3-3 {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction:column;

      .title {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
        }
      }

      .imgs {
        width: 100%;
        height: 80%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        .img {
          width: 90%;
          height: 90%;

          margin: 10px auto;
        }

      }
    }

    //border: #13B5B1 1px solid;
  }

  .panel {
    width: 100%;
    height: 30%;

    border: 1px solid rgba(25, 186, 139, 0.17);
    border-radius: 10px;
    //background-color: rgba(255, 255, 255, 0.04);
  }

  .table2-1 {

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      flex-direction: column;
      position: relative;

      overflow: hidden;

      .top-con {
        position: absolute;
        top: 0;
        left: 0;
        height: 50%;
        width: 2000px;

        display: flex;
        justify-content: start;
        align-items: center;

        animation: scan-line-top 24s linear infinite;
        animation-delay: 1s;
      }

      .bottom-con {
        position: absolute;
        bottom: 0;
        left: 0;

        height: 50%;
        width: 2000px;

        display: flex;
        justify-content: start;
        align-items: center;

        animation: scan-line-top 24s linear infinite;
      }
    }

    height: 55%;

    background-image: none;
    background-color: rgba(255, 255, 255, 0.04);

    position: relative;

    .cell {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 100px;
      height: 180px;

      margin: 8px;

      .img-det {
        position: absolute;

        bottom: 0;
        left: -7px;

        width: 40px;

        opacity: 0.8;

        z-index: 9;
      }

      .in-cell {
        width: 85%;
        height: 80%;
        //background-color: #13B5B1;

        background-image: url('src/assets/imgs/chartBack.png');
        //background-size: cover;
        border: rgba(1, 132, 213, 1) 3px solid;
        background-color: rgba(1, 132, 213, .4);

        display: flex;
        justify-content: center;
        align-items: center;
        align-content: space-around;

        flex-direction: column;

        cursor: pointer;

        .head {
          width: 50px;
          height: 50px;

          margin-bottom: 4px;
        }

        img {
          width: 80px;
          height: 80px;
        }

        .det {
          width: 100%;
          height: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
          align-content: space-around;

          flex-direction: column;

          font-size: 0.8rem;

          .el-divider {
            width: 70%;
            height: 1px;
            border: rgba(255,255,255,.9) 1px solid;
          }
        }

        .un-det {
          height: 47%;

          display: flex;
          justify-content: center;
          align-items: center;

          .un-img {
            width: 80%;
            height: 80%;

            opacity: 0.8;
          }
        }

        .el-divider {
          width: 80%;
          height: 1px;
          border: rgba(255,255,255,.9) 1px solid;

          margin: 0;
        }

        .shorter {
          width: 60%;
        }

        .txt {
          color: white;
          font-size: 0.9rem;
        }
      }

      .in-cell:hover {
        background-color: rgba(1, 132, 213, 0.4);
        .txt {
          color: #13B5B1;
        }

        .el-divider {
          border: #13B5B1 1px solid;
        }
      }

    }

    .cell:before {
      width: 10px;
      height: 10px;

      content: "";
      left: 0;
      top: 0;

      position: absolute;
      border-left: #13B5B1 3px solid;
      border-top: #13B5B1 3px solid;
    }

    .cell:after {
      width: 10px;
      height: 10px;

      content: "";
      right: 0;
      bottom: 0;

      position: absolute;
      border-right: #13B5B1 3px solid;
      border-bottom: #13B5B1 3px solid;
    }
  }

  .table2-1:before {
    width: 10px;
    height: 10px;

    content: "";
    right: 0;
    top: 0;

    position: absolute;
    border-right: #13B5B1 2px solid;
    border-top: #13B5B1 2px solid;
  }
  .table2-1:after {
    width: 10px;
    height: 10px;

    content: "";
    left: 0;
    bottom: 0;

    position: absolute;
    border-left: #13B5B1 2px solid;
    border-bottom: #13B5B1 2px solid;
  }
  .table2-2 {
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  @keyframes scan-line-top {
    //12个元素
    0% {
      left: 0;
    }
    4.17% {
      left: -116px;
    }
    8.33% {
      left: -116px;
    }
    12.5% {
      left: -232px;
    }
    16.67% {
      left: -232px;
    }
    20.83% {
      left: -348px;
    }
    25% {
      left: -348px;
    }
    29.17% {
      left: -464px;
    }
    33.33% {
      left: -464px;
    }
    37.5% {
      left: -580px;
    }
    41.67% {
      left: -580px;
    }
    45.83% {
      left: -696px;
    }
    50% {
      left: -696px;
    }
    54.17% {
      left: -812px;
    }
    58.33% {
      left: -812px;
    }
    62.5% {
      left: -928px;
    }
    66.67% {
      left: -928px;
    }
    70.83% {
      left: -1044px;
    }
    75% {
      left: -1044px;
    }
    79.17% {
      left: -1160px;
    }
    83.33% {
      left: -1160px;
    }
    87.5% {
      left: -1276px;
    }
    91.67% {
      left: -1276px;
    }
    95.83% {
      left: -1392px;
    }
    100% {
      left: -1392px;
    }
  }

  @keyframes scan-line {
    //8个元素
    0% {
      left: 0;
    }
    6.25% {
      left: -116px;
    }
    13% {
      left: -116px;
    }
    19.25% {
      left: -232px;
    }
    25.5% {
      left: -232px;
    }
    31.75% {
      left: -348px;
    }
    38% {
      left: -348px;
    }
    44.25% {
      left: -464px;
    }
    50.5% {
      left: -464px;
    }
    56.75% {
      left: -580px;
    }
    63% {
      left: -580px;
    }
    69.25% {
      left: -696px;
    }
    75.5% {
      left: -696px;
    }
    81.75% {
      left: -812px;
    }
    88% {
      left: -812px;
    }
    94.25% {
      left: -928px;
    }
    100% {
      left: -928px;
    }
  }

  #video {
    width: 95%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 2.8%;
    z-index: 1;
  }

  .headAttack {
    width: 90% !important;
    margin-top: 10px !important;
    margin-bottom: 8px !important;

  }
</style>
