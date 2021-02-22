<template>
  <div class="hello">
    <a-button type="primary" @click="open">antd</a-button>
    {{ count }}
  </div>
</template>

<script>
import {
  getCurrentInstance,
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnmounted,
  // ref,
} from 'vue'
import Content from './content'
export default {
  name: 'HelloWorld',
  setup() {
    const that = getCurrentInstance()
    const open = () => {
      that.ctx.$createAntdDrawer({
        drawerProps: {
          title: '标题',
          width: '600px',
          // mask: true,
        },
        content: {
          template: Content,
          props: {
            msg: 'Welcome to Your Vue.js App',
          },
        },
      })
    }
    return {
      open,
    }
  },
  // methods: {
  //   open() {
  //     this.$createAntdDrawer({
  //       drawerProps: {
  //         title: '标题',
  //         width: '500px',
  //         mask: false,
  //       },
  //       content: {
  //         template: Content,
  //         props: {
  //           msg: 'Welcome to Your Vue.js App',
  //         },
  //       },
  //     })
  //   },
  // },
}
</script>

<style scoped></style>
