<template>
  <div class="details-main">
    <div class="tip">
      <ProgressBar :detection="details.detection"></ProgressBar>
    </div>
    <div class="details-content">
      <div class="details-cell panel">
        <div class="details-in-cell">
            <img :src="src" alt="det" class="icon-det"/>
            <div class="notice" v-if="details.detection != 1">
                <span style="color: #FF505F; font-size: 40px; font-weight: bold">遭到{{details.attack}}攻击</span>
            </div>
          <div class="left">
            <img src="src/assets/imgs/faces/img_1.png" alt="head" />
          </div>
          <el-divider direction="vertical" class="el-divider-middle"></el-divider>
          <div class="right">
            <p class="name item"> 姓名： {{details.name}} </p>
<!--            <el-divider direction="horizontal"></el-divider>-->
            <p class="position item">职位： {{details.position}} </p>
<!--            <el-divider direction="horizontal"></el-divider>-->
            <p class="id item">年龄： {{details.age}} </p>
<!--            <el-divider direction="horizontal"></el-divider>-->
            <p class="id item">学历： {{details.degree}} </p>
<!--            <el-divider direction="horizontal"></el-divider>-->
            <p class="id item">id： {{details.employeeID}} </p>
            <div style="line-height: 2em;" :style="{display: details.detection == 2?'block' : 'none'}">
<!--                <div class="notice" style="color: #FF505F; font-size: 25px; font-weight: bold;">-->
<!--                    人脸识别未通过-->
<!--                </div>-->
            </div>
          </div>
          <div class="right-img">
            <img :src="img(details.id)" alt="head"/>
<!--              <img src="src/assets/imgs/faces/6_1.jpg">-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProgressBar from '../echarts/progressBar.vue'
import { dataInJs } from '~/assets/data/data.js'
import { ref } from 'vue'

const route = useRouter()

let id = route.currentRoute.value.query.id

const details = dataInJs().find(item => item.id == id)
if(details.detection == 3){
  details.name = '未匹配到数据'
  details.position = '未匹配到数据'
  details.id = '未匹配到数据'
  details.age = '未匹配到数据'
  details.degree = '未匹配到数据'
}
// const src = "src/assets/imgs/icons/det"+details.detection+".png"

const src = ref("src/assets/imgs/icons/det"+details.detection+"-1.png")

const img = (id) => {
  const imgSrc = "src/assets/imgs/faces/" + id + ".jpg"
  return imgSrc
}
</script>

<style scoped lang="less">
.details-main {
  width: 100%;
  height: 100%;

  //font-family: '楷体', sans-serif;

  //url("src/assets/imgs/bg.png") no-repeat
  background: rgba(0, 0, 0, 0.5);

  background-size: 100% 100%;
  //opacity: 0.8;

  /*border: #13B5B1 1px solid;*/

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tip {
    //margin-top: 20px;

    width: 40%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;

    //background-color: rgba(255, 255, 255, 0.15);
    background: #2C6584 url('src/assets/imgs/details_bg2.png');
    background-size: cover;
    border-radius: 10px;


    margin-top: 20px;
  }

  .details-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;

    .details-cell {
      width: 60%;
      height: 90%;

      display: flex;
      justify-content: center;
      align-items: center;

      .details-in-cell {
        width: 96%;
        height: 90%;
        border-radius: 5px;
        //url('src/assets/imgs/bg_0.jpg')
        background: #2C6584 url('src/assets/imgs/details_bg2.png');
        background-size: cover;
        border: #6F6F63 2px solid;

        box-shadow: #F1E8B7 0 0 10px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        position: relative;

        .icon-det {
          width: 120px;
          height: 120px;

          position: absolute;
          right: 5px;
          bottom: 5px;


        }

        .notice {
          width: 100%;
          position: absolute;

          bottom: 30px;
          left: 0;
        }

        .left {
          width: 25%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .el-divider-middle {
          height: 70%;
          width: 1px;

          border: #FFFFE2 1px solid;
        }

        .right {
          width: 30%;
          height: 80%;
          display: flex;
          justify-content: space-around;
          align-items: center;

          flex-direction: column;

          p {
            color: white;
            font-size: 25px;
            font-weight: normal;
          }

          .el-divider {
            width: 100%;
          }

          .item {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: rgba(0, 0, 0, .3);
            border-radius: 5px;
          }

        }

        .right-img {
          width: 25%;
          height: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          flex-direction: column;
        }

      }
    }
  }

  .panel {
    background: rgba(0,0,0,0) !important;
    border: none;
  }

  .panel:after{
    width: 60px;
    height: 60px;

    border-right: #0C8F84 10px solid;
    border-bottom: #0C8F84 10px solid;
  }

  .panel:before{
    width: 60px;
    height: 60px;

    border-left: #0C8F84 10px solid;
    border-top: #0C8F84 10px solid;
  }
}
</style>
