<template>
  <div>{{ id }}</div>
  <div class="buttons">
    <a-button type="primary" @click="idAdd">id++</a-button>
    <a-button @click="idReduce">id--</a-button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const id = computed(() => store.state.id)
    return {
      id,
      idAdd: () => store.commit('idAdd'),
      idReduce: () => store.commit('idReduce'),
    }
  },
}
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: center;
}
button {
  width: 100px;
  margin: 0 10px;
}
</style>
