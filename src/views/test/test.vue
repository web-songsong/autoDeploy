<template>
  <div class="test"
       @click="test">
    list: {{list}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData({ store }) {
    store.dispatch('vuex_tets', { test: 'xxxxx' })
  },
  computed: {
    ...mapState({
      list: state => state.testVuex.list
    })
  },
  methods: {
    test() {
    }
  }
}
</script>

<style lang="less" scoped>
.test {
}
</style>
