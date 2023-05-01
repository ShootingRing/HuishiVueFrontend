<template>
  <div class="wrapper">
    <div class="header">
        <span class="demonstration">Management</span>
    </div>
    <ol class="info-content">
      <li v-for="item in cards" class="management-unit">
        <div class="management-header">
          <h5 class="management-title">
            <a target="_blank">{{ item.name }}</a>
          </h5>
          <span class="management-type">{{ item.type }}</span>    
        </div>
        <div class="management-footer">
        <span class="management-chief">{{ item.chief }}</span>
        <span class="management-year">{{ item.time }}</span>
      </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import router from "/src/router/index.js";
import { ref } from "vue";
/**
 * 无，唯一搞过像样的项目就是正在做的服创项目
 * 之后准备一心搞游戏客户端
 */

/*
大数据智能处理                         中组部国家万人计划青年拔尖人才项目     何必
公共区域人群异常行为监测与智能预警         湖南省重点研发计划                  李华
多模态小样本数据的特征增强与语义迁移学习    之江实验室开放基金                  张欣欣
XXX交互式特征抽取与迁移识别研究           军队委托项目                       邹红颜
PaddlePaddle深度学习框架介绍与实践       教育部产学合作协同育人项目           刘熙系
模态失衡背景下的数据提质与深度融合方法研究   国家自然科学基金面上项目              李存点
 */
const cardsAll = ref([
  {
    id: 1,
    name: '大数据智能处理',
    type: '中组部国家万人计划青年拔尖人才项目',
    chief: '何必',
    time: '2023-1-5',
  },
  {
    id: 2,
    name: '公共区域人群异常行为监测与智能预警',
    type: '湖南省重点研发计划',
    chief: '李华',
    time: '2023-1-5',
  },
  {
    id: 3,
    name: '多模态小样本数据的特征增强与语义迁移学习',
    type: '之江实验室开放基金',
    chief: '张欣欣',
    time: '2023-1-5',
  },
  {
    id: 4,
    name: 'XXX交互式特征抽取与迁移识别研究',
    type: '军队委托项目',
    chief: '邹红颜',
    time: '2023-1-5',
  },
  {
    id: 5,
    name: 'PaddlePaddle深度学习框架介绍与实践',
    type: '教育部产学合作协同育人项目',
    chief: '刘熙系',
    time: '2023-1-5',
  },
  {
    id: 6,
    name: '模态失衡背景下的数据提质与深度融合方法研究',
    type: '国家自然科学基金面上项目',
    chief: '李存点',
    time: '2023-1-5',
  },
  {
      id: 7,
      name: '基于概率犹豫模糊集的医疗数据安全风险评估',
      type: '现代信息科技',
      chief: '李波波',
      time: '2023-1-5',
  },
  {
      id: 8,
      name: '大数据背景下的气象数据安全防护策略探究',
      type: '网络安全技术与应用',
      chief: '朱添福',
      time: '2023-1-5',
  },
  {
      id: 9,
      name: ' 基于边缘计算的人脸识别视频传输系统设计',
      type: '网络安全技术与应用',
      chief: '王兴元',
      time: '2023-1-5',
  },
    ])
  // {
  //     id: 7,
  //     name: 'XXX交互式特征抽取与迁移识别研究',
  //     type: '军队委托项目',
  //     chief: '邹红颜',
  // },
  // {
  //     id: 8,
  //     name: 'PaddlePaddle深度学习框架介绍与实践',
  //     type: '教育部产学合作协同育人项目',
  //     chief: '刘熙系',
  // },
  // {
  //     id: 9,
  //     name: '模态失衡背景下的数据提质与深度融合方法研究',
  //     type: '国家自然科学基金面上项目',
  //     chief: '李存点',
  // },

const cards = ref(cardsAll.value.slice(0, 9))

const nextPage = (number) => {
    console.log(number)
    number = number - 1
    cards.value = cardsAll.value.slice(number * 9, number * 9 + 9)
    console.log(cards.value)
}

const handleClick = () => {
    router.push({
        name: 'info',
    })
}
</script>

<style scoped lang="less">

.info-content {
  width: 100%;
  padding-left: 70px;
}

.management-unit {
  width: 90%;
  height: 150px;

  padding-top: 1.0rem;
  padding-left: 1.1rem;

  background-color: #fff;
  border-radius: 1rem;
  margin-bottom: 1rem;

  box-sizing: border-box;
  .management-header {
    margin-bottom: 2rem;
    .management-title {
      margin: 0;
      font-size: inherit;
      font-weight: inherit;
      margin-bottom: .5rem;

      a {
        color: #023760;
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }

  .management-footer {
    display: flex;
    align-items: baseline;
    
    .management-chief {
      color: #fff;
      background-color: #60022f;
      padding: .2rem .6rem;
      border-radius: 100px;
      margin-right: .5rem;
    }

    .management-year {
      font-family: Montserrat,sans-serif;
      font-weight: bold;
      font-style: italic;

    }

  }

}

.management-unit:hover {
  box-shadow: 0 0 15px 5px rgba(0,0,0,.2);
}

.management-unit::marker {
  color: grey;
  font-style: italic;
}
.wrapper {
  height: 100%;
}

</style>
