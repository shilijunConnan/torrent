<template>
<el-input type="textarea" :row='5'>{{date}}</el-input>
<el-button @click="sendToP">关闭</el-button>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'RefuseDetail',
    props:{
        date:{
            type:String
        }
    },
    components:{

    },
    emits:['yourself'],
    setup(props,ctx){
        let sendToP=()=>{
            ctx.emit("yourself",false)
            }
        return{
sendToP
        }
    }
}
</script>

<style lang='scss' scoped>

</style>