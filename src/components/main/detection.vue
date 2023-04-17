<template>
  <div class="detection">
    <div class="detect-circle">

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
        //     .then(res => {
        //   console.log(res)
        //   if(res.status == 200){
        //     success.value = true
        //     isScaning.value = false
        //     dialogVisible.value = false
        //   }else{0
        //     success.value = false
        //     isScaning.value = false
        //     dialogVisible.value = false
        //   }
        // })
        // document.getElementById('video').src = base64;
      });
      //
      // const videoUrl = window.URL.createObjectURL(recordBlob);
      // open(videoUrl)

      // saveAs(recordBlob, 'record.mp4');
    }

    setTimeout(() => {
      recorder.stop();
    }, 5000);
  };

  // navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((s) => {
  //       const video = document.getElementById('video');
  //       video.srcObject = "G:\\DeepFake_FaceRecognition (3)\\DeepFake_FaceRecognition\\results\\Test.mp4";
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


const src = ref("src/assets/imgs/icons/det"+details.detection+"-1.png")
const srcLeft = ref("src/assets/imgs/faces/right_scan.jpg")
const srcRight = ref("src/assets/imgs/faces/right_assets.jpg")


const detailsClick = () => {
  dialogVisible.value = false
}

const dialogVisible = ref(false)

</script>

<style scoped lang="less">
  .detection {

    width: 100%;
    height: 100%;

    .detect-circle {
      width: 500px;
      height: 500px;

      margin: auto auto;

      border-radius: 50%;
      background-color: rgba(220, 220, 220, 0.5);
    }
  }


</style>
