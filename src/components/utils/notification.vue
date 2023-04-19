<template>
<div class="notification">
{{message}}
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'notification',
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
</script>
