<template>
    <el-row style="align-items: center; ">
        <h1>证书：</h1> &ensp;&ensp;&ensp;
    </el-row><br>
    <price-one></price-one>
    <br><br><hr>
</template>

<script>
import PriceOne from './mainResumeComponents/PriceOne.vue'
export default{
    name:'MainResumePrice',
    props:{

    },
    components:{
PriceOne
    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>