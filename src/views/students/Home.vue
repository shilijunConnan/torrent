<template>
    <el-container class="home">
      <el-header><header-1></header-1></el-header>
      <el-main>
          <mains-1></mains-1>
      </el-main>
      <el-footer><bottom-1></bottom-1></el-footer>
    </el-container>
<router-view></router-view>
</template>

<script>
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
import Mains1 from '@/components/students/mains/Mains1.vue'
export default{
    name:'Home',
    props:{
    },
    components:{
        Header1,Bottom1,Mains1

    },
    setup(props,ctx){
        console.log('home')
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.home {
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        position: fixed;
        z-index: 99;
        background-color: #000000;
    }
    main{
        margin-top: 60px;
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}

</style>