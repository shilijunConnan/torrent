<template>
    <el-container class="hall">
      <el-header><header-1></header-1></el-header>
      <el-main>
         <div id='nav' class="nav" :class="{'fix-nav': navBarFixed}">
             <search-input></search-input>
            <regions></regions>
         </div>
      </el-main>
      <el-footer><bottom-1></bottom-1></el-footer>
    </el-container>
   <el-backtop  style="text-align: center;bottom: 150px;left: 40px; color:green;width:50px;height:50px;border-radius:50%">
      <el-icon size="50px"><top/></el-icon>
  </el-backtop>
</template>

<script>
import {ref,onMounted} from 'vue'
import Header1 from '@/components/students/headers/Header1.vue'
import Bottom1 from '@/components/students/bottoms/Bottom1.vue'
import SearchInput from '@/components/students/headers/SearchInput.vue'
import Regions from '@/components/students/headers/Regions.vue'

import {Top} from '@element-plus/icons'
export default{
    name:'Hall',
    props:{
    },
    components:{
        // components
        Header1,Bottom1,SearchInput,Regions,
        // element icon
        Top,
    },
    setup(props,ctx){
        let navBarFixed=ref(false)

        function watchScroll(){
            // 滚动的距离
            var scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;

            // 容器的高度
            var offsetTop = document.querySelector("#nav").offsetHeight;

            // console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);

            //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
            if (scrollTop > offsetTop) {
              navBarFixed.value = true;
            //   console.log('1')
            } else {
              navBarFixed.value = false;
            //   console.log('0')
            }
        }
        function destroyed(){
          // 移除事件监听
          window.removeEventListener("scroll", watchScroll);
        }
        let roll=onMounted(()=>{
            window.addEventListener("scroll", watchScroll)
        })
        return{
        watchScroll,destroyed,roll,navBarFixed
        }
    }
}
</script>

<style lang='scss' scoped>
.hall {
    header{
        padding: 0; 
        margin:0;
        width: 100%;
        height:60px;
        background-color: #000000;
    }
    main{
        min-height : 900px;
        padding: 0; 
        margin:0;
    }
    footer{
        background-color: #000000;
        height: auto;
    }
}
.nav{
    width: 100%;
    height: 90px;
}
.fix-nav{
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
}
</style>