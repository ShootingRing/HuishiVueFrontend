<template>
<div class="content">
  <div class="header">
    <span class="demonstration">DataAnalysis</span>
  </div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">系统遭受恶意攻击占比</h2>
    </div>
    <div class="article-content tables">
      <Ros class="ros charts"></Ros>
    </div>
  </article>
  <div class="divider"></div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">系统登陆与恶意登录次数占比</h2>
    </div>
    <div class="article-content tables">
      <AttackTimes class="attack charts"></AttackTimes>
    </div>
  </article>
  <div class="divider"></div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">系统安全检测置信度</h2>
    </div>
    <div class="article-content tables">
      <Bar class="ros charts"></Bar>
    </div>
  </article>
  <div class="divider"></div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">系统遭恶意攻击统计</h2>
    </div>
    <div class="article-content tables Cookie">
      <Cookie class="ros charts"></Cookie>
    </div>
  </article>
  <div class="divider"></div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">登陆历史</h2>
    </div>
    <div class="article-content tables loginHis">
      <el-table :data="loginData" height="250" style="width: 100%" @row-click="handleClick">
        <el-table-column prop="employeeID" label="ID" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="position" label="Position" />
        <el-table-column prop="age" label="Age" />
        <el-table-column prop="degree" label="Degree" />
      </el-table>
    </div>
  </article>
  <div class="divider"></div>
  <article class="article container">
    <div class="article-header">
      <h2 class="article-title">高危登录历史</h2>
    </div>
    <div class="article-content tables attackHis">
      <el-table :data="attackData" height="250" style="width: 100%" @row-click="handleClick">
        <el-table-column prop="employeeID" label="ID" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="position" label="Position" />
        <el-table-column prop="age" label="Age" />
        <el-table-column prop="degree" label="Degree" />
      </el-table>
    </div>
  </article>
</div>


<el-dialog 
v-model="dialogTableVisible" 
title="详细信息" 
class="dialog"
width="80%"
>
  <div class="dialog-container">
    <div class="info">
      <p>姓名：{{ itemShowing.name }}</p>
      <p>年龄：{{ itemShowing.age }}</p>
      <p>职位：{{ itemShowing.position }}</p>
      <p>学号：{{ itemShowing.employeeID }}</p>
      <p>学位：{{ itemShowing.degree }}</p>
      <p>识别结果：{{ itemShowing.detection == 1? '认证成功':'认证失败' }}</p>
    </div>
      <img :src='img(itemShowing.id)' alt="head" class="left-img"/>
      <img v-if="itemShowing.value.id == 10" src="src\assets\imgs\faces\zcy_face.png" alt="head" class="right-img"/>
      <img v-else src="src\assets\imgs\faces\img_1.png" alt="head" class="right-img"/>
  </div>

</el-dialog>
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
const Dataset = ref(dataInJs())

const loginData = ref(Array.from(Dataset.value.filter(item => item.detection == 1)));
const attackData = ref(Array.from(Dataset.value.filter(item => item.detection == 2)));

// const src = ref("src/assets/imgs/icons/det"+details.detection+"-1.png")

const img = (id) => {
  const imgSrc = "src/assets/imgs/faces/" + id + ".jpg"
  return imgSrc
}

onUnmounted(() => {
  clearInterval(interval)
})
/*进行页面跳转：点击中上图表中一个单元时，显示详情*/
const clickHandler = (id) => {
  console.log('click' + id)

  /*由wrapper下的<router-view>接收，其使用absolute定位*/
  router.push(
      {
        name: 'itemShowing',
        query: {
          id: id
        }
      }
  )
}

const back = () => {
  router.back()
}

const itemShowing = ref(null);
const dialogTableVisible = ref(false);

const handleClick = (row) => {
  console.log("click!!")
  itemShowing.value = row;
  dialogTableVisible.value = true;
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
    }

    .table3-2 {
      width: 50%;
      height: 100%;
    }
  }

  .bottom {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: space-around;

    .table2-1 {
      width: 50%;
    }

    .table2-2{
      width: 50%;
    }
  }

  .tables {
    width: 100%;
    height: 300px;
  }

  .Cookie {
    height: 500px;
  }

  .dialog-container {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
  }

  .left-img {
    width: 30%;
    height: 380px;
  }

  .right-img {
    width: 30%;
    height: 380px;
  }

  .info {
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
