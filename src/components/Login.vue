<template>
  <div class="chat">
    <div class="container">
      <p>登录</p>
      <el-input v-model="username" placeholder="请输入账号" class="account"> </el-input>
      <el-input v-model="password" placeholder="请输入密码" class="password"> </el-input>
      <el-button v-on:click="commitLogin" type="primary" class="loginButton">登录</el-button>
      <div class="bottomContainer">
        <el-button v-on:click="toResetPassword" type="text">忘记密码</el-button>
        <el-button v-on:click="toRegister" type="text">注册</el-button>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN } from '../store/storeActionsKey'
import { mapGetters } from 'vuex'
import { GET_LOGINED } from '../store/storeGetterKey'

export default {
  name: 'Login',
  props: {
    title: String
  },
  methods: {
    commitLogin() {
      if (this.username == "") {
        this.$alert('请输入账号', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      } else if (this.password == "") {
        this.$alert('请输入密码', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      } else {
        let {username, password} = this
        this.login({username, password})
      }
    },
    toResetPassword() {
      this.$router.push("/resetPassword")
    },
    toRegister() {
      this.$router.push("/register")
    },
    ...mapActions({
      login: LOGIN
    })
  },
  data() {
    return {
      username: "",
      password: ""
    }
  },
computed: {
    ...mapGetters({
      isLogined: GET_LOGINED
    })
  },
  watch: {
    isLogined: function (newd) {
      if (newd) {
        this.$router.push("/chat")
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 350px;
    margin: auto;
  }
  .account {
    margin-top: 30px;
  }

  .password {
    margin-top: 20px;
  }

  .loginButton {
    margin-top: 20px;
    width: 350px;
  }

  .bottomContainer {
    display: flex;
    width: 350px;
    justify-content: space-between;
  }
</style>


