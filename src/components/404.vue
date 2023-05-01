<template>
  <div>
<!--    <n-button> I am 404.vue </n-button>-->
    <n-result
      status="404"
      title="404"
      description="您所找的资源不存在"
      size="huge"
    >
      <template #footer>
          <n-button
            @click="handleClick"
          >Back Home</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>

import router from "/src/router/index.js";

function handleClick() {
  console.log('click the to login button');
  router.push({
    name: 'home',
  })
}

</script>