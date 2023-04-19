<template>
  <div class="bgDes">
    <div class="left">
      <div class="content">
        <div class="content-left">
          <div style="font-size: 28px;">项目介绍</div>
          <div class="about">
            <div style="text-indent:2em;">智冶系统是集管理、预测、优化、可视化监测功能于一体的智能冶炼预测与优化平台。该平台面向多订单多品种批量生产模式，能够根据导入的订单和需求数据建立预测模型并提供工艺参数优化方案。该平台还提供面向管理和生产两个不同层面的可视化大屏，辅助管理者实时监控订单完成情况，辅助操作人员实时监测各生产锅炉的详细参数变化情况，使操作人员能够及时发现异常并作出调整措施，保证生产过程稳定。</div>
            <div style="text-indent:2em;">智冶系统主要采用异质集成学习算法对钢铁质量进行精准预测，并引入了即时学习策略来适应多工况生产。同时，系统通过引入自适应、精英策略和量子特性对遗传算法进行改进，实现了对钢铁生产的工艺参数优化。该系统避免了钢铁生产配比的经验试算法和质量事后控制法导致的质量不稳定和耗费高的问题，并且降低了对操作人员在经验上的绝对性要求和学习成本，从而能够降低企业的人力成本。</div>
            <div style="text-indent:2em;">项目致力于为产品质量提供更好的预测优化方案，为实现钢铁生产的降本增质增效和企业智能化转型助力。</div>
          </div>
          <div style="font-size: 28px;">项目优势</div>
          <div class="about">
            <div><i class="el-icon-s-tools" style="margin-right: 15px"></i>质量精准预测，工艺参数智能优化</div>
            <div><i class="el-icon-s-custom" style="margin-right: 15px"></i>多目标优化实现配比多样化、产品定制化</div>
            <div><i class="el-icon-s-marketing" style="margin-right: 15px"></i>可视化大屏实时监测参数变化情况，保证生产过程稳定</div>
            <div><i class="el-icon-s-grid" style="margin-right: 15px"></i>一键式操作实现降本、提质、增效</div>
          </div>
          <div style="height: 10px;">

          </div>
        </div>
        <img style="margin-left: 5px; margin-top: 50px; opacity:1.0;height: 330px;" src="src/assets/imgs/ciyun4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
<style lang="less" scoped>
.bg{
  float: left;
  margin: -20px;
}
.left {
  float:left;
  display: flex;
  width: 80%;
  margin-left: 10% ;
  margin-top: 20px;
}
.about{
  font-size: 15px;
  margin: -5px 0 0px 15px;
  line-height: 1.6;
  font-weight: 300;
  opacity: .85;
}
.left .content {
  width: 100%;
  height: 60vh;
  margin-top: 45px;
  background-color: rgba(210,212,218,0.5);
  padding: 40px 40px 40px 40px;
  color: #F3F4F8;
  border-radius: 15px;
  >img {
    height: 280px;
    opacity: .50;
    margin: 0 0px 0px -35px ;
  }
}
.content {
  display: flex;
  flex-direction: row;
  overflow-y:auto;
}
.content::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.create .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.create .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.right .button{
  float: left;
  margin-left:50px;
  height: 100%;
}

.panel-group {
  // margin-top: 100px;
  .el-row{
    width: 100%;
  }

  .card-panel-col {
    margin-bottom: 20px;
    width: 230px;
    margin-right: 10px;
  }
  .card-panel {
    height: 100px;
    width: 230px;
    margin: 10px;
    cursor: pointer;
    font-size: 12px;
    // overflow: hidden;
    color: #666;
    background: rgba(255, 255, 255, 0.459);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.151);
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.274);

    &:hover {
      .iconfont {
        color: #fff;
      }

      .icon-danju {
        background: #ebe044;
        font-size: 40px;
        height: 40px;
        width: 40px;
      }

      .icon-shangpin {
        background: #36a3f7;
        font-size: 40px;
        height: 40px;
        width: 40px;
      }

      .icon-tijikongjian {
        background: #f4516c;
        font-size: 40px;
        height: 40px;
        width: 40px;
      }

      .icon-baobiao {
        background: #34bfa3;
        font-size: 40px;
        height: 40px;
        width: 40px;
      }
    }

    .icon-danju {
      color: #ebe044;
      font-size: 40px;
      height: 40px;
      width: 40px;
    }

    .icon-shangpin {
      color: #36a3f7;
      font-size: 40px;
      height: 40px;
      width: 40px;
    }

    .icon-tijikongjian {
      color: #f4516c;
      font-size: 40px;
      height: 40px;
      width: 40px;
    }

    .icon-baobiao {
      color: #34bfa3;
      font-size: 40px;
      height: 40px;
      width: 40px;
    }

    .iconfont {
      float: left;
      text-align: center;
      margin: 14px 0 0 15px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin-left: 0px;

      .card-panel-text {
        // line-height: 80px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 18px;
        width:100%;
        margin: 40px 40px 40px 0px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .iconfont {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
  z-index: 2;
}
</style>
