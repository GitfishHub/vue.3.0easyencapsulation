<template>
  <div>{{ msg }}</div>
  <div>{{ message }}</div>
</template>
<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  props: ['msg'],
  setup(props, context) {
    let message = ref('')
    message.value = context.props.msg
    const that = getCurrentInstance()
    console.log(that, 'that')
    return {
      message,
    }
  },
}
</script>
