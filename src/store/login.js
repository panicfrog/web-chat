import { GET_LOGINED } from './storeGetterKey'
import { SET_LOGINED, REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAIL } from './storeMutationsKey'
import { LOGIN, LOGOUT } from './storeActionsKey'
import Fetch from '../../network/fetch';

export default  {
  state: {
    logined: false,
    requestStatus: 0   // 默认状态0  开始请求1   请求成功2  请求失败3
  },
  mutations: {
    [SET_LOGINED](state, payload) {
      state.logined = payload.isLogined
    },
    [REQUEST_BEGIN](state) {
      state.requestStatus = 1
    },
    [REQUEST_SUCCESS](state) {
      state.requestStatus = 2
    },
    [REQUEST_FAIL](state) {
      state.requestStatus = 3
    }
  },
  actions: {
    [LOGIN]({commit}, { username, password }) {
      // TODO: 请求登录接口
      let body =  { username, password}
      commit(REQUEST_BEGIN)
       return Fetch("/user/login", {method: "POST", body})
                .then(response => {
                  commit(SET_LOGINED, {isLogined: true})
                  console.log(JSON.stringify(response))
                })
                .catch(err => {
                  commit(REQUEST_FAIL)
                  console.log(err)
                })
    },

    [LOGOUT]({commit}) {
      commit(SET_LOGINED, {isLogined: false})
    }
  }, 
  getters: {
    [GET_LOGINED]: store => {
      return store.logined
    }
  }
}
