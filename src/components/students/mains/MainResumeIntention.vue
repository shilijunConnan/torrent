<template>
    <el-row style="align-items: center; ">
        <h1>求职意向</h1> &ensp;&ensp;&ensp;必填
    </el-row><br>
    <intention-one></intention-one>
    <br><br><hr>
</template>

<script>
import {ref} from 'vue'
import IntentionOne from './mainResumeComponents/IntentionOne.vue'
export default{
    name:'MainResumeIntention',
    props:{

    },
    components:{
IntentionOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>