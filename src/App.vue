<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_LOGINED } from './store/storeGetterKey'

export default {
  name: 'app',
  components: { },
  computed: {
    ...mapGetters({
      isLogined: GET_LOGINED
    })
  },
  watch: {
    isLogined: function (newd) {
      if (!newd) {
        this.$router.push("/login")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
