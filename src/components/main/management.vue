<template>
  <div class="wrapper">
    <div class="info-content">
        <el-card class="info-card" v-for="item in cards" @click="handleClick">
            <!-- <template #header>
                <div class="card-header">
                    <span class="id">{{item.id}}</span>
                    <span class="name" v-html="item.name"></span>
                </div>
            </template>
                <div class="bottom">
                  <span class="type" v-html="'项目类别：' + item.type"></span>
                  <span class="chief">
                    负责人：{{item.chief}}
                  </span>
                </div> -->
                <template>
                  <div class="id">
                    {{ item.id }}
                  </div>
                  <div class="card-info">
                    <div class="name" v-html="item.name"></div>
                    <div class="cheif">
                      负责人:{{ item.cheif }}
                    </div>
                    <div class="type" v-html="item.type"></div>
                  </div>
                </template>
        </el-card>
    </div>
    <div class="pagination" style="margin-left: 6%;">
        <el-pagination layout="prev, pager, next" :total="50" background @current-change="nextPage"/>
    </div>
  </div>
</template>

<script setup>
import router from "~/router/index.js";
import { ref } from "vue";

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
    type: '中组部国家万人计划<br />青年拔尖人才项目',
    chief: '何必',
  },
  {
    id: 2,
    name: '公共区域人群异常行<br />为监测与智能预警',
    type: '湖南省重点研发计划',
    chief: '李华',
  },
  {
    id: 3,
    name: '多模态小样本数据的特征<br />增强与语义迁移学习',
    type: '之江实验室开放基金',
    chief: '张欣欣',
  },
  {
    id: 4,
    name: 'XXX交互式特征抽取<br />与迁移识别研究',
    type: '军队委托项目',
    chief: '邹红颜',
  },
  {
    id: 5,
    name: 'PaddlePaddle<br />深度学习框架介绍与实践',
    type: '教育部产学合作<br />协同育人项目',
    chief: '刘熙系',
  },
  {
    id: 6,
    name: '模态失衡背景下的数据提<br />质与深度融合方法研究',
    type: '国家自然科学<br />基金面上项目',
    chief: '李存点',
  },
  {
      id: 7,
      name: '基于概率犹豫模糊集的<br />医疗数据安全风险评估',
      type: '现代信息科技',
      chief: '李波波',
  },
  {
      id: 8,
      name: '大数据背景下的<br />气象数据安全防护策略探究',
      type: '网络安全技术与应用',
      chief: '朱添福',
  },
  {
      id: 9,
      name: ' 基于边缘计算的<br />人脸识别视频传输系统设计',
      type: '网络安全技术与应用',
      chief: '王兴元',
  },
    ])
  // {
  //     id: 7,
  //     name: 'XXX交互式特征抽取<br />与迁移识别研究',
  //     type: '军队委托项目',
  //     chief: '邹红颜',
  // },
  // {
  //     id: 8,
  //     name: 'PaddlePaddle<br />深度学习框架介绍与实践',
  //     type: '教育部产学合作<br />协同育人项目',
  //     chief: '刘熙系',
  // },
  // {
  //     id: 9,
  //     name: '模态失衡背景下的数据提<br />质与深度融合方法研究',
  //     type: '国家自然科学<br />基金面上项目',
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
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.info-content {
  padding-left: 8%;
  padding-top: 5%;
  padding-right: 2%;

  width: 100%;
  height: 99%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0 5%;

  font-family: '楷体', sans-serif;


  .info-card {
    width: 100%;
    height: 65%;
    //
    //border-radius: 10px;
    //
    background: rgba(255, 255, 255, 0.04) url("src/assets/imgs/chartBack.png") no-repeat;

    cursor: pointer;

    .card-header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
      height: 40px;

      .id {
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background-color: #409EFF;

        color: #f9f9f9;
      }

      .name {
        font-size: 25px;
        color: white;

        font-weight: bold;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .type {
        color: #409EFF;
      }

      .chief {
        color: white;
      }
    }
  }

  .info-card:hover {
    box-shadow: #13B5B1 0 0 8px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>
