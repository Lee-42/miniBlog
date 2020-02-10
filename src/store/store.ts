import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

// import * as types from "./type";

Vue.use(Vuex);

const initPageState = () => {
  return {
    // user: {
    //   username: "",
    //   password: ""
    // }
  };
;}

const store = new Vuex.Store({
  //确保在发布环境下关闭严格模式
  strict: process.env.NODE_ENV !== "production",
  modules: {
    user
  },
  state: initPageState(),
  mutations: {
    //"SAVE_USER" 方法
    // [types.SET_USER](state:object | any, pageState: object | any){
    //   for(const prop in pageState){
    //     state[prop] = pageState[prop]; 
    //   }
    // }
  },
  actions: {}
})

export default store;