<template>
    <div class="detection">
        <transition name="move">
            <div class="top">
                <div class="left" key="1">
                    <div class="key-point panel">
                        <!--          <img src="/public/assets/imgs/faces/face_after.jpg" alt="" class="key-img" v-if="success">-->
                        <video id="video" v-if="success || isScaning" autoplay>
                            <source src="/public/assets/videos/1_keys.mkv" type="video/mp4">
                        </video>
                        <p v-if="success || isScaning">人脸关键点检测</p>
                    </div>
                    <div class="hit-map panel">
                        <!--          <img src="/public/assets/imgs/faces/picwish.jpg" alt="" class="hit-img" v-if="success">-->
                        <video id="video" v-if="success || isScaning" autoplay>
                            <source src="/public/assets/videos/1_split.mkv" type="video/mp4">
                        </video>
                        <p v-if="success || isScaning">人像精细分割</p>
                    </div>
                </div>
                <div class="scan" key="2">
                    <!--        <div class="scan-line" v-if="!success"></div>-->
                    <video id="video" v-if="isScaning" autoplay>
                        <source src="/public/assets/videos/Test1.mkv" type="video/mp4">
                    </video>
                    <!--        <video v-if="isScaning" autoplay muted controls>-->
                    <!--          <source src="/public/assets/videos/2023-02-07 23-01-06.mkv" type="video/mp4">-->
                    <!--        </video>-->
                    <img src="/public/assets/imgs/scan_border.png" alt="scan" class="scan-img" v-if="!success & !isScaning"/>
                    <div class="right-hint" v-else-if="success & !isScaning">
                        <svg t="1680153388766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             p-id="5210"
                             width="150"
                             height="150"
                        >
                            <path d="M533.333333 85.333333c-247.426667 0-448 200.573333-448 448s200.573333 448 448 448 448-200.573333 448-448-200.573333-448-448-448z m228.42 335.086667l-277.333333 277.333333a21.333333 21.333333 0 0 1-30.173333 0l-149.333334-149.333333a21.333333 21.333333 0 0 1 30.173334-30.173333L469.333333 652.5l262.246667-262.253333a21.333333 21.333333 0 1 1 30.173333 30.173333z"
                                  fill="#67C23A" p-id="5211">
                            </path>
                        </svg>
                        <p style="color: #67C23A; font-size: 45px; font-weight: bold">认证成功</p>
                        <p style="color: #67C23A; font-size: 45px; font-weight: bold">现在可访问所有信息</p>
                    </div>
                </div>
                <div class="right-container" v-if="success & !isScaning">
                    <div class="right panel"
                         v-loading="isScaning"
                         element-loading-background="rgba(255, 255, 255, 0.2)"
                    >
                        <!--          <img src="/public/assets/imgs/faces/085807_before.jpg" alt="" class="head" v-if="success"/>-->
                        <img src="/public/assets/imgs/faces/img.png" alt="" class="head" v-if="success"/>
                        <div class="info" v-if="success">
                            <p class="name item"> 姓名： {{details.name}} </p>
                            <el-divider direction="horizontal"></el-divider>
                            <p class="position item">职位： {{details.position}} </p>
                            <el-divider direction="horizontal"></el-divider>
                            <p class="id item">年龄： {{details.age}} </p>
                            <el-divider direction="horizontal"></el-divider>
                            <p class="id item">学历： {{details.degree}} </p>
                            <el-divider direction="horizontal"></el-divider>
                            <p class="id item">id： {{details.employeeID}} </p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
      <div class="bottom">
        <div class="button-container">
          <img
              class="button"
              src="/public/assets/imgs/button_active.png"
              alt="button"
              @click="handleScan"
              v-if="isHovering"
              @mouseover="handleMouseover"
              @mouseleave="handleMouseleave"
          />
          <img
              class="button"
              src="/public/assets/imgs/button.png"
              alt="button"
              @click="handleScan"
              v-else
              @mouseover="handleMouseover"
              @mouseleave="handleMouseleave"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {defineEmits, ref} from "vue"
  import {dataInJs} from "/public/assets/data/data.js"
  import { saveAs } from 'file-saver';
  import axios from "axios";
  
  const success = ref(false);
  
  const isHovering = ref(false)
  
  const isScaning = ref(false)
  
  const handleMouseover = () => {
    isHovering.value = true
  }
  
  const handleMouseleave = () => {
    isHovering.value = false
  }
  
  const details = dataInJs().find(item => item.id == 9)
  if(details.detection == 3){
    details.name = '未匹配到数据'
    details.position = '未匹配到数据'
    details.id = '未匹配到数据'
    details.age = '未匹配到数据'
    details.degree = '未匹配到数据'
  }
  
  const emit = defineEmits(['button-click'])
  const photoList = ref([])
  const pagation = ref({
    pageSize: 18,
    currentPage: 1,
    total: 0
  })
  const videoData = ref([]);
  
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      // readAsDataURL
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error("blobToBase64 error"));
      };
    });
  }
  
  const handleScan = async () => {
  
    // await axios.get('http://127.0.0.1:8000/detection')
    dialogVisible.value = true
    isScaning.value = true
  
    let stream = null;
    let recorder = null;
  
    const startRecording = async () => {
      console.log('start recording')
      recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      recorder.start();
  
      let recordBlob = null;
  
      recorder.ondataavailable = (event) => {
        console.log(event.data);
        videoData.value.push(event.data)
      };

      recorder.onstop = async () => {
        recordBlob = new Blob(videoData.value, {type: 'video/mp4;codecs=vp8,opus'});
        blobToBase64(recordBlob).then((res) => {
          console.log('base64:',res);
          axios.post('http://127.0.0.1:8000/detection', {
            data: res
          })
        });
      }
  
      setTimeout(() => {
        recorder.stop();
      }, 5000);
    };
  
    // navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then((s) => {
    //       const video = document.getElementById('video');
    //       video.srcObject = "G:\DeepFake_FaceRecognition (3)\DeepFake_FaceRecognition\results\Test.mp4";
    //       video.play();
    //       stream = s;
    //       startRecording();
    //     })
    //     .catch((err) => console.error(err));
  
    //--------------------------------------------------------------------------------------------------
    // const video = document.getElementById('video');
    // video.play()
    //--------------------------------------------------------------------------------------------------
  
    setTimeout(() => {
      success.value = true
      isScaning.value = false
      console.log(isScaning.value)
      // stream.getVideoTracks()[0].stop();
      console.log(isScaning.value)
      emit('button-click');
    }, 3000)
  }
  
  
  const src = ref("/public/assets/imgs/icons/det"+details.detection+"-1.png")
  const srcLeft = ref("/public/assets/imgs/faces/right_scan.jpg")
  const srcRight = ref("/public/assets/imgs/faces/right_assets.jpg")
  
  
  const detailsClick = () => {
    dialogVisible.value = false
  }
  
  const dialogVisible = ref(false)
  
  </script>
  
  <style scoped lang="less">
  
  
  .detection {
    margin-top: 8%;
  
    width: 100%;
    height: 95%;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .top {
    width: 100%;
    height: 80%;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    margin-top: -10.5%;
  
    .scan {
  
      display: flex;
      //justify-content: center;
      align-items: center;
  
      position: relative;
  
      width: 35%;
  
      .scan-img {
        height: 100%;
      }
  
      .right-hint {
        margin-left: 10%;
  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  
        p {
          line-height: 1.5em;
        }
      }
  
      .scan-line {
        position: absolute;
  
        top: 0;
        left: 2%;
  
        width: 95%;
        height: 5px;
  
        background: linear-gradient(90deg, rgba(29, 255, 246, 0) 0%,#1CFFF9 50%,rgba(28, 255, 249, 0) 100%), linear-gradient(360deg, rgba(28, 255, 249, 0) 0%,rgba(33, 255, 249, 0.3215686274509804) 50%,rgba(28, 255, 249, 0) 100%);
        animation: scan-line 2s linear infinite alternate;
      }
  
      @keyframes scan-line {
        0% {
          top: 0;
        }
        100% {
          top: 550px;
        }
      }
    }
  }
  
  .left {
    width: 30%;
    height: 100%;
  
    /*background-color: #f2f2f2;*/
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
    padding-left: 5%;
  
    animation: linear 1s left;
  }
  
  .key-point {
    margin-right: 5%;
    width: 100%;
    height: 48%;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    flex-direction: column;
  
    /*background-color: #000000;*/
    p {
      font-size: 20px;
      font-weight: normal;
      color: white;
  
      width: 70%;
  
      border-radius: 20px;
  
      background-color: rgba(0, 0, 0, 0.2);
    }
  
    .key-img {
      height: 70%;
    }
  }
  
  .hit-map {
    margin-right: 5%;
    width: 100%;
    height: 48%;
    /*background-color: #f2f2f2;*/
  
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    flex-direction: column;
  
    .hit-img {
      height: 70%;
    }
  
    p {
      font-size: 20px;
      font-weight: normal;
      color: white;
  
      width: 80%;
  
      border-radius: 20px;
  
      background-color: rgba(0, 0, 0, 0.2);
  
    }
  
  }
  
  .right-container {
    width: 30%;
    height: 100%;
  
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  
    padding-right: 3%;
  
  }
  
  .right {
    width: 95%;
    height: 100%;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    flex-direction: column;
  
    padding: 20px 0;
  
    .head {
      width: 50%;
  
      margin-bottom: 10px;
    }
  
    .info {
      width: 100%;
      height: 50%;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  
  
      p {
        color: white;
        font-size: 20px;
        font-weight: bold;
      }
  
      .el-divider {
        width: 60%;
        height: 1px;
  
        margin: 10px 0;
      }
  
      .item {
  
        width: 60%;
        height: 20%;
  
        background-color: rgba(0, 0, 0, .3);
        border-radius: 5px;
  
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  
  }
  
  .bottom {
    width: 100%;
    height: 10%;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
  
  }
  
  .button-container {
    width: 50%;
    height: 100%;
  
    position: relative;
    display: inline-block;
  }
  
  .button {
    width: 20%;
    height: 95%;
  
    cursor: pointer;
    margin: 5% auto 0;
  }
  
  .button:active {
    transform: scale(0.9);
  }
  
  .details-content {
    position: absolute;
    top: 150px;
    left: 0;
  
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: start;
  
    z-index: 999;
  
    .details-cell {
      width: 100%;
      height: 90%;
  
      display: flex;
      justify-content: center;
      align-items: center;
  
      .details-in-cell {
        width: 66%;
        height: 90%;
        border-radius: 5px;
        //url('/public/assets/imgs/bg_0.jpg')
        background: #2C6584FE;
        background-size: cover;
        border: #6F6F63 2px solid;
  
        box-shadow: #F1E8B7 0 0 10px;
  
        display: flex;
        justify-content: space-around;
        align-items: center;
  
        position: relative;
  
        .icon-det {
          width: 130px;
          height: 130px;
  
          position: absolute;
          right: 10px;
          bottom: 10px;
  
        }
  
        .left {
          width: 20%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
  
        .el-divider-middle {
          height: 80%;
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
            font-size: 30px;
            font-weight: bold;
          }
  
          .el-divider {
            width: 100%;
          }
  
          .item {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
  
            background-color: rgba(0, 0, 0, .3);
            border-radius: 5px;
          }
        }
  
        .right-img {
          width: 20%;
          height: 100%;
  
          //padding-top: 10%;
  
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
  
      }
    }
  }
  
  p {
    font-family: 'Microsoft YaHei UI', sans-serif;
  }
  
  .move-enter-active,
  .move-leave-active {
    transition: all 0.5s;
  }
  
  .move-enter,
  .move-leave-to {
    transform: translateX(100%);
  }
  </style>
  