<template>
  <div class="content">
    <el-container class="aside-container">
      <el-aside width="200px"
                @mouseover = "handleMouseover"
                @mouseleave = "handleMouseleave"
      >
            <!--              菜单结构:
                                    展开
                                    项目介绍
                                    内部通知(锁)
                                    项目管理(锁)



                                    (底部)
                                    个人信息
                                    退出登录
            -->
            <el-menu
                default-active="2"
                class="el-menu-top"
                background-color="#02253e"
                text-color="#fff"
                active-text-color="#13B5B1"
                @select="handleSelect"
            >
            <el-menu-item index="1" class="logo-in-aside">
            <img class="title_logo" src="src/assets/imgs/Title/Title_font1.png"  alt="title"/>
            </el-menu-item>
              <el-menu-item index="2">
                <img src="src/icons/svg/introduce_hover.svg" alt="introduce" class="svg-icon" v-if="isHovering" />
                <img src="src/icons/svg/introduce.svg" alt="introduce" class="svg-icon" v-else />
                <span class="des">项目介绍</span>
              </el-menu-item>
              <el-menu-item index="3" v-bind:class="{'disabled' : access < 1}">
                <div v-if="access >= 1">
                  <img src="src/icons/svg/notice_hover.svg" alt="notice" class="svg-icon" v-if="isHovering">
                  <img src="src/icons/svg/notice.svg" alt="notice" class="svg-icon" v-else>
                </div>
                <div v-else>
                  <img src="src/icons/svg/lock.svg" alt="face" class="svg-icon">
                </div>
                <span class="notice">内部通知</span>
              </el-menu-item>
              <el-menu-item index="4" v-bind:class="{'disabled' : access < 1}">
                <div v-if="access >= 1">
                  <img src="src/icons/svg/people_hover.svg" alt="people" class="svg-icon" v-if="isHovering">
                  <img src="src/icons/svg/people.svg" alt="people" class="svg-icon" v-else>
                </div>
                <div v-else>
                  <img src="src/icons/svg/lock.svg" alt="face" class="svg-icon">
                </div>
                <span class="manage">项目管理</span>
              </el-menu-item>
              <el-menu-item index="5">
                <div>
                  <!-- <scan-alt /> -->
                  <img src="src/icons/svg/face_hover.svg" alt="face" class="svg-icon" v-if="isHovering">
                  <img src="src/icons/svg/face.svg" alt="face" class="svg-icon" v-else>
                </div>
                <span class="face">人脸识别</span>
              </el-menu-item>
              <el-menu-item index="7">
                <div>
                  <img src="src/icons/svg/exit_hover.svg" alt="face" class="svg-icon" v-if="isHovering">
                  <img src="src/icons/svg/exit.svg" alt="face" class="svg-icon" v-else>
                </div>
                <span class="logout">退出登录</span>
              </el-menu-item>
            </el-menu>
      </el-aside>
      <el-container class="main-container">
        <el-main class="main">
          <router-view @button-click="updateAccess"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>
  import { ref, defineEmits } from 'vue'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@vicons/antd'
  import { TextDescription20Regular , BookInformation24Regular} from '@vicons/fluent'
  import { GuiManagement, UserProfileAlt, Logout, ScanAlt, Locked } from '@vicons/carbon'
  import router from "~/router/index.js"
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { dataInJs } from "~/assets/data/data.js"




  // 侧边栏折叠相关变量
  const isCollapse = ref(true)
  const hoverTimeout = ref(null)
  const isHovering = ref(false)

  // 访问权限相关变量
  const access = ref(1) //权限等级 : 0-未认证 1-普通用户 等等
  const updateAccess = () => {
    access.value = 3
  }

  const details = dataInJs().find(item => item.id == 1)
  if(details.detection == 3 || details.detection == 2){
    details.name = '未匹配到数据'
    details.position = '未匹配到数据'
    details.age = '未匹配到数据'
    details.degree = '未匹配到数据'
  }
  // const src = "src/assets/imgs/icons/det"+details.detection+".png"

  const myAlert = () => {
    ElMessageBox.confirm(
        '无访问权限，是否前往认证？',
        '警告',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }
    ).then(() => {
      router.push({path: '/detection'})
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消认证'
      })
    })
  }

  const handleSelect = (index) => {
    console.log(index)
    if(index == 1)
        return

    switch (index) {
      case '2':
        router.push('/description')
        break
      case '3':
        if(access.value < 1) {
          myAlert()
          break
        }
        router.push('/information')
        break
      case '4':
        if(access.value < 1) {
          myAlert()
          break
        }
        router.push('/management')
        break
      case '5':
        router.push('/detection')
        break
      case '6':
        router.push('/user')
        break
      case '7':
        router.push('/login')
        // 退出登录,清除本地存储
        localStorage.clear()
        break
    }
  }


  //isHovering是为了防止鼠标快速移入移出时，导致的抖动
  const handleMouseover = () => {
    isHovering.value = true;
    hoverTimeout.value = setTimeout(() => {
      if(isHovering.value){
        isCollapse.value = false
      }
    }, 300)

  }

  const handleMouseleave = () => {
    clearTimeout(hoverTimeout.value)
    isHovering.value = false;
    isCollapse.value = true
  }

</script>

<style scoped lang="less">
.aside-container {
  height: 100%;

  display:flex;
  flex-direction: row;
}



//content
.content {
  width: 100%;
  height: 100%;

  // background: url("src/assets/imgs/index_bg.png") no-repeat;
  background-size: cover;

  overflow: scroll;

}

//sidebar
.el-aside {
  width: 150px;

  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  bottom: 0;
  overflow: hidden;

  z-index: 999;

}

.el-menu-top {
  //border: #535bf2 solid 3px;
  height: 100%;
  
}

.el-menu span {
  font-family: "Microsoft YaHei UI",sans-serif;
  font-weight:lighter;
  font-size: 15px;
  color: #1E90FF;
}

.el-menu:hover {
  .des {
    color: #FFA500;
  }

  .notice {
    color: #32CD32;
  }

  .manage {
    color: #CCCC00;
  }

  .face {
    color: #8A2BE2;
  }
}

//.el-menu-top:not(.el-menu--collapse) {
//  width: 150px;
//  min-height: 85%;
//}
//
//.el-menu-bottom:not(.el-menu--collapse) {
//  width: 150px;
//  min-height: 15%;
//}

.el-menu-item {
 display: flex;
 flex-direction: column;
 justify-items: center;
 align-content: center;

 height: 17%;

 p {
  display: block;
 }
}

// .el-menu-item:hover {
//   border-right: #fff 5px solid;

//   background-color: #13B5B1;
//   color: #545c64;
// }
.main-container {
 height: 100%;

 padding-left: 150px;
}

.disabled {
  color: #B4B4B4;
}

// .disabled:hover {
//   background-color: #CCCCCC;
//   color: #000000;
// }

.main {
  overflow: hidden;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.logo-in-aside {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  width: 50px;
}
</style>
