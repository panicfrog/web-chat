<template>
  <div class="main">
    <div class="left-side">
      <div class="left-top">
        <button class="icon"></button>
        <button class="chat"></button>
        <button class="group"></button>
      </div>
      <button class="setting"></button>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGOUT } from '../store/storeActionsKey'
import { mapGetters } from 'vuex'
import { GET_LOGINED } from '../store/storeGetterKey'
export default {
  name: 'Chat',
  props: {
    title: String
  }, 
  methods: {
    toChat() {
      this.$router.push("/login")
    },
    ...mapActions({
      logout: LOGOUT
    })
  },
  computed: {
    ...mapGetters({
      isLogined: GET_LOGINED
    })
  },
  watch: {
    isLogined: function (newd) {
      if (newd) {
        this.$router.push("/login")
      }
    }
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
     min-width: 700px;
  }
  .left-side{
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    background-color: red;
    min-height: 700px;
  }
  .right-side{
    flex-grow: 1;
    background-color: green;
    min-height: 700px;
    min-width: 600px;
  }

  .left-top {
    display: flex;
    flex-direction: column;
  }

  .icon, .chat, .group {
    margin-top: 20px;
    height: 50px;
    width: 50px;
  }

  .setting {
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
  }

</style>
