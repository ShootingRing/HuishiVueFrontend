<script setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { User, Lock, Key, Picture, Loading } from "@element-plus/icons-vue"
import axios from "axios"
import router from "/src/router/index.js"

const loginFormRef = ref(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
/** 登录表单数据 */
const loginFormData = reactive({
  username: "",
  password: "",
})
/** 登录表单校验规则 */
const loginFormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
  ]
}
/** 登录逻辑 */
const handleLogin = () => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      window.sessionStorage.setItem("token", 'tempToken')
      window.sessionStorage.setItem("username", loginFormData.username)
      window.sessionStorage.setItem("auth", 0)
      router.push({ path: "/home" })

      // axios.post('http://localhost:8000/users/login', loginFormData).then(response => {
      //   console.log(response)
      //   console.log(response.data.code)
      //   const code = response.data.code

      //   if(code === 404) return freshPage('用户不存在')
      //   if(code === 401) return freshPage('密码错误')
      //   if(code === 400) return freshPage('Bad Response')
      //   if(code === 200) {
      //     console.log("login success")
      //     window.sessionStorage.setItem("token", response.data.token)
      //     window.sessionStorage.setItem("username", loginFormData.username)
      //     window.sessionStorage.setItem("auth", 0)
      //   }
      // })
      //   .then(() => {
      //     router.push({ path: "/home" })
      //   })
      //   .catch(() => {
      //     loginForm.password = ""
      //   })
      //   .finally(() => {
      //     loading.value = false
      //   })

    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <img src="\src\icons\svg\faceDetection.svg" alt="视安" class="left-icon"/>
      <div class="right-login">
        <div class="title">
          <p class="title-font">视安</p>
          <p class="slogan">---您的保密管理方案</p>
          <p class="welcome">Welcome Back :)</p>
        </div>
        <div class="content">
          <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules" @keyup.enter="handleLogin">
            <el-form-item prop="username">
              <el-input
                v-model.trim="loginFormData.username"
                placeholder="用户名"
                type="text"
                tabindex="1"
                :prefix-icon="User"
                size="large"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginFormData.password"
                placeholder="密码"
                type="password"
                tabindex="2"
                :prefix-icon="Lock"
                size="large"
                show-password
              />
            </el-form-item>
            <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin"> 登 录 </el-button>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: #f2f3f5;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 880px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    .left-icon {
      width: 60%;
    }
    .right-login {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 150px;

        p {
          margin: 10px;
        }
        .title-font {
          font-size: 60px;
          font-weight: bold;
        }
        .slogan {
          width: 80%;
          text-align: right;
          opacity: 0.4;
        }
        .welcome {
          font-size: 30px;
        }
      }

      .content {
        padding: 20px 50px 50px 50px;
        :deep(.el-input-group__append) {
          padding: 0;
          overflow: hidden;
          .el-image {
            width: 100px;
            height: 40px;
            border-left: 0px;
            user-select: none;
            cursor: pointer;
            text-align: center;
          }
        }
        .el-button {
          width: 100%;
          margin-top: 10px;
        }
      }
    }

  }
}
</style>