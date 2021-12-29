<template>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23"><h3>自我评价</h3></el-col>
</el-row>
<el-row>
    <el-col :span="1"></el-col>
    <el-col :span="23">self</el-col>
    <el-col :span="1"></el-col>
</el-row>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'ResumeSelf',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let self=ref('ziwoasdkfhkdlszha')
        return{
self
        }
    }
}
</script>

<style lang='scss' scoped>

</style>