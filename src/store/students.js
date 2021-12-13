import { createStore } from 'vuex'

export default createStore({
  state: {
    location:[],
    salary:[],
    education:[],
    experience:[],
    kind:[],
    company:[],
    scale:[]
  },
  // },项目命名 程序源码，备份数据库，说明文档（搭建项目的过程），视频，需求分析，系统设计，测试报告
  mutations: {
    addList(state,params){
      let param1=params.param1
      let param2=params.param2
      // console.log(param1)
      // console.log(param2)
      state[param1].push(param2)
      
    },
    deleteList(state,params){
      let param1=params.param1
      let param2=params.param2
      let index=state[param1].indexOf(param2)
      state[param1].splice(index,1)
    },
    clearList(state){
      console.log(0)
      state['location']=[]
      state['salary']=[]
      state['scale']=[]
      state['education']=[]
      state['experience']=[]
      state['company']=[]
      state['kind']=[]
      console.log(state['education'])
    },
  },
  actions: {
  },
  modules: {
  }
})
