<template>
  <div class="header">
      <span class="demonstration">Detection</span>
  </div>
  <div class="detection">
    <div class="detect-img">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="src/icons/svg/face_not_recognition.svg"
          class="image"
          v-if="!success"
        />
        <img
          src="src\assets\imgs\faces\keys.png"
          class="image"
          v-else
        />
        <div style="padding: 0px; text-align: center; margin-bottom: 10px;">
          <span>人脸关键点检测</span>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="src/icons/svg/face_not_recognition.svg"
          class="image"
          v-if="!success"
        />
        <img
          src="src/assets/imgs/faces/spilt.png"
          class="image"
          v-else
        />
        <div style="padding: 0px; text-align: center; margin-bottom: 10px;">
          <span>人像精细分割</span>
        </div>
      </el-card>
    </div>
    <div class="detect">
      <div class="detect-circle">
        <video class="video" v-if="!success && isScaning" autoplay>
          <source src="src/assets/videos/stream1.mkv" type="video/mp4">
        </video>
        <img
        v-else 
        class="video-svg" src="src/icons/svg/face_recognition.svg" alt="recognition_svg"/>
      </div>
      <el-button class="start-button" @click="handleScan" type="primary">
        开始识别
      </el-button>
    </div>
    <div class="detect-info">
      <el-card :body-style="{ 
        padding: '0px',
        display: 'flex',
        flexDirection: 'column'
        }">
        <img
          src="src/icons/svg/face_not_recognition.svg"
          class="image"
          v-if="!success"
        />
        <img
          src="src\assets\imgs\faces\face_ydy.jpg"
          class="image-face"
          v-else
        />
        <div style="padding: 0px; text-align: center;">
          <p>姓名：{{ success?details.name:'待识别' }}</p>
          <p>性别：{{ success?details.sex:'待识别' }}</p>
          <p>年龄：{{ success?details.age:'待识别' }}</p>
          <p>职位：{{ success?details.position:'待识别' }}</p>
          <p>学号：{{ success?details.id:'待识别' }}</p>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script setup>
import {defineEmits, ref} from "vue"
import {dataInJs} from "~/assets/data/data.js"
import { saveAs } from 'file-saver';
import axios from "axios";

const success = ref(false);

const isHovering = ref(false)

const isScaning = ref(false)

const details = ref({
  name: '于东杨',
  sex: '男',
  age: 20,
  position: '前端工程师',
  id: 8208215566
})

const emit = defineEmits(['button-click'])

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

  // const startRecording = async () => {
  //   console.log('start recording')
  //   recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
  //   recorder.start();

  //   let recordBlob = null;

  //   recorder.ondataavailable = (event) => {
  //     console.log(event.data);
  //     videoData.value.push(event.data)
  //   };

  //   recorder.onstop = async () => {
  //     recordBlob = new Blob(videoData.value, {type: 'video/mp4;codecs=vp8,opus'});
  //     blobToBase64(recordBlob).then((res) => {
  //       console.log('base64:',res);
  //       axios.post('http://127.0.0.1:8000/detection', {
  //         data: res
  //       })
  //     });
  //   }

  //   setTimeout(() => {
  //     recorder.stop();
  //   }, 5000);
  // };

  setTimeout(() => {
    success.value = true
    isScaning.value = false
    console.log(isScaning.value)
    // stream.getVideoTracks()[0].stop();
    console.log(isScaning.value)
    emit('button-click');
  }, 3000)
}


const detailsClick = () => {
  dialogVisible.value = false
}

const dialogVisible = ref(false)

console.log(success.value);
</script>

<style scoped lang="less">
  .detection {

    width: 100%;

    display: flex;
    flex-direction: row;

    .detect-img {
      width: 33%;

      padding: 0 8% 0 8%;

      .el-card {

        margin-top: 30px;
        // width: 70%;

        .image {
          width: 100%;
        }

        .image-face {
          width: 70%;
        }

      }

      box-sizing: border-box;

    }

    .detect {
      width: 33%;
      display: flex;
      flex-direction: column;
      .detect-circle {
        width: 450px;
        height: 450px;

        margin: 30px auto;

        border-radius: 50%;
        background-color: rgba(220, 220, 220, 0.5);
      
        display: flex;

      }

      .el-button {
        height: 40px;
        width: 60%;
        font-size: 20px;
        border-radius: 50px;
        margin: 30px auto;
      }

/*       .el-button:hover {
        background-color: #213547;
      } */
    }

    .detect-info {
      width: 33%;

      display: flex;
      .el-card {
        width: 280px;
        height: 93%;
        margin: 30px auto;
      }
      
    }
  }

  .video {
    width: 470px;
    height: 450px;

    border-radius: 50%;
  }

  .video-svg {
    width: 350px;
    height: 350px;
    margin: auto;
  }

</style>
