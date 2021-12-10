<template>
<h3>{{uid}}</h3>
<el-button @click="sendToP">close</el-button>
</template>

<script>
import {ref} from 'vue'
export default{
  name:'PostRefusedDetail',
  props:{
    uid:{
      type:Number
    }
  },
  components:{

  },
  emits:['yourself'],
  setup(props,ctx){
    let st=ref(false)
    let sendToP=()=>{
      ctx.emit("yourself",st.value)
    }
    
    return{
      st,sendToP
    }
  }
}
</script>

<style lang='scss' scoped>

</style>