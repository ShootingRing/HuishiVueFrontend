<template>
  <div>
    <div>
      <dv-scroll-board class="board" :config="config" style="width:450px;height:260px;" @mouseover="mouseoverHandler" @click="clickHandler" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ScrollBoard } from '@kjgl77/datav-vue3'
import {dataInJs} from "~/assets/data/data.js";
import { ref, reactive } from 'vue'


const img = (id) => {
  const imgSrc = "src/assets/imgs/faces/" + id + ".jpg"
  return '<img alt="head" src='+imgSrc+' style="width: 40px; margin-top: 15px; opacity: 0.8;"/>'
}

const icon2 = '<img alt="det2" src="src/assets/imgs/icons/det2-1.png" style="width: 35px; margin-top: 15px; opacity: 0.8;"/>'
const icon3 = '<img alt="det3" src="src/assets/imgs/icons/det3-1.png" style="width: 35px; margin-top: 15px; opacity: 0.8;"/>'

const data = dataInJs()

const data2 = ref(data.filter((item) => {
  if(item.detection != 1){
    return item
  }
})
)

data2.value = data2.value.map((item) => {

  if(item.detection == 2) {
    return [icon2, img(item.id), item.attack + '攻击']
  }
  else{
    return [icon3, img(item.id), 'null']
  }
})


console.log('data_error', data2.value)

const config = reactive({
  data: data2.value,
  // index: true,
  columnWidth: [100, 150, 150],
  align: ['center','center','center'],
  evenRowBGC: 'rgba(19,181,238, 0)',
  rowNum: 4,
})

const mouseoverHandler = (e: any) => {
  console.log(e)
}

const clickHandler = (e: any) => {
  console.log(e)
}

</script>

<style scoped lang="less">
.ceil {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dv-scroll-board{
  color: #FFF;

  :deep(.rows){
    .row-item{
      text-align: center;
      line-height: 2rem;

      background-color: rgba(0,0,0, 0.2) !important;
      //background: linear-gradient(2deg, rgba(178, 254, 250, 0.64) 0%,rgba(14, 210, 247, 0.82) 100%) !important;
      border-radius: 10px;

      margin: 12px 10px;

      .ceil{
        color:#FFF;
        font-size: 1em;
        i{
          font-size: 0.5em;
        }
      }
      .ceil:nth-child(2){
        color: #eb5a6d !important;
        font-size: 1.1em;
        width: 25%;
      }
    }
  }
}

</style>
