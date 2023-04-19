<template>
  <div class="wrapper">

    <div class="content">
      <div class="left">
        <img class="img" src="src/assets/imgs/Title/Title_font1.png" alt />
      </div>
      <div class="right">
        <!--        <div class="left">-->
        <!--          &lt;!&ndash;        <img style="width: 100px; margin-bottom: 30px; margin-top: -45px;" src="../assets/imgs/SSlogo.png" alt />&ndash;&gt;-->
        <!--          <img style="width: 25vw;" src="../assets/imgs/sapiens.png" alt />-->
        <!--        </div>-->
        <div class="title">
          机密信息安防系统
<!--          云眼-->
<!--          SecureFace-->
        </div>
        <n-form
            ref="loginFormRef"
            :model="loginFormData"
            :rules="rules"
            label-width="0"
            label-position="top"
            @submit.native.prevent
        >
          <!--    username-->

          <n-form-item class="form-item" path="username" >
            <div class="usernameAndPassword">用户名</div>
            <div class="input">
              <n-input
                  placeholder="请输入用户名"
                  v-model:value="loginFormData.username"
                  @keyup.enter.native="submit"
                  class="input"
              >
                <template #prefix>
                  <n-icon>
                    <User/>
                  </n-icon>
                </template>
              </n-input>
            </div>
          </n-form-item>
          <!--    password-->

          <n-form-item class="form-item" path="password" >
            <div class="usernameAndPassword">密码</div>
            <n-input
                placeholder="请输入密码"
                v-model:value="loginFormData.password"
                type="password"
                @keyup.enter.native="submit"
                class="input"
            >
              <template #prefix>
                <n-icon>
                  <PasswordFilled/>
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
        </n-form>
        <!--        login button-->
        <n-button class="submit" attr-type="button" @click="submit" type="info"> 登录</n-button>
      </div>
    </div>

  </div>
</template>

<script setup>
//define loginFormData and rules

import {PasswordFilled} from '@vicons/material'
import {User} from '@vicons/tabler'
import {inject, reactive, ref, computed} from "vue"
import axios from "axios";
import router from "~/router/index.js";

//data
const reload = inject('reload')
const loginFormRef = ref(null)
const rules = reactive({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur'},
  ]
})
const loginFormData = reactive({
  username: '',
  password: '',
})

const freshPage = (Message) => {
  alert(Message)
  loginFormData.username = ''
  loginFormData.password = ''
  // console.log("reload")
  reload()
}

const submit = () => {
    router.push({
        name: 'home'
    })

    console.log("click submit")
    console.log(loginFormRef.value)

    loginFormRef.value.validate(async invalid => {

      if (invalid) {
        console.log('invalid')
        return false
      }

      console.log('valid')
      console.log(loginFormData)

      // const {data: res} = await axios.post('https://www.fastmock.site/mock/9765791af97387b52694903045766590/app/login', loginFormData)
    // const {data: res} = await axios.post('http://localhost:8000/login', loginFormData)
    await axios.post('http://localhost:8000/users/login', loginFormData).then(response => {
      console.log(response)
      console.log(response.data.code)
      const code = response.data.code

      if(code === 404) return freshPage('用户不存在')
      if(code === 401) return freshPage('密码错误')
      if(code === 400) return freshPage('Bad Response')
      if(code === 200) {
        console.log("login success")
        window.sessionStorage.setItem("token", response.data.token)
        window.sessionStorage.setItem("username", loginFormData.username)
        window.sessionStorage.setItem("auth", 0)
        router.push({
          name: 'home'
        })
      }
    })
    // console.log(res.code)  //is a string!!!
    // if (res.code === 404) return alert('User Not Found')
    // if (res.code === 401) return alert('Wrong Password')
    // if (res.code === 400) return alert('Bad Response')

    //
    // //console.log(res.data.verifySuccess)
    // //
    // if (res.data.verifySuccess) {
    //   console.log('success')
    //   window.sessionStorage.setItem("token", res.token)
    //   window.sessionStorage.setItem("username", loginFormData.username)
    // router.push({
    //   name: 'home'
    // })
    //   } else {
    //     freshPage('用户名或密码错误')
    //   }
    })
}

const ValidationStatus = computed(()=>{
    return createStatus();
})

function createStatus() {
    return 'warning';
}

</script>

<style scoped lang="less">

.wrapper {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper::before {

  /*background-image: url('src/assets/imgs/index_bg.png');*/
  background-image: url('src/assets/imgs/index_bg.png');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  //opacity: 0.8;
  //background-color: rgba(255, 255, 255, 0.8);
}

.title {
  font-family: '楷体',Inter, Avenir, Helvetica, Arial, sans-serif;
  color: white;
  font-weight: normal;
  font-size: 35px;
  width: 80%;
  height: 13%;

  border-bottom: #FFFFFF2F solid 1px;
  margin: 0;
}

.img {
  width: 100%;
}

.des {
  font-family: "Microsoft YaHei UI",serif;
  font-size: large;
  color: white;
  font-weight: bold;
}

.code {
  width: 200px;
}

.id-code {
  width: 150px;
  margin-left: 50px;
}

.form-item {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.usernameAndPassword {
  display: inline-block;

  font-family: '楷体',Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #FFFFFF;
  /*margin-left: 20%;*/
  width: 60px;

  margin-right: 15px;

}

.n-input {
  width: 380px;
  height: 50px;

  border-radius: 5px;
  z-index: 2;

  padding: 2% 0;
}

.content {
  margin: 0;
  height: 60%;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  flex-direction: row;
  /*background-color: rgba(210, 212, 218, 0.5);*/
  border-radius: 20px;
  z-index: 2;

  /*position: absolute;*/
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 58%;
  height: 85%;
  background-color: rgba(210, 212, 218, 0.1);
  /*background-color: rgba(255, 255, 255, 0.2);*/
  opacity: 0.9;
  //box-shadow:10px 10px 10px rgba(48, 169, 255, 0.5);
  /*box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.1);*/
  border-radius: 6px;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
}

.submit {
  width: 40%;
  height: 12%;

  font-size: 25px;
  font-family: '楷体', Inter, Avenir, Helvetica, Arial, sans-serif;
}

.n-form {
  height: 34%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.n-form-item {
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
}
</style>
