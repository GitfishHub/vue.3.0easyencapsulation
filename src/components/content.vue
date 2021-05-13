<template>
  <div>{{ msg }}</div>
  <div>{{ message }}11</div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  props: ['msg'],
  setup(props, context) {
    let message = ref('')
    const that = getCurrentInstance()
    console.log(props, context, that, 'that')
    message.value = that.ctx.msg
    return {
      message,
    }
  },
}
</script>
