<template>
  <el-tabs >
    <el-tab-pane label="职位">
        <main-favorite-position></main-favorite-position>
    </el-tab-pane>
    <el-tab-pane label="公司">
        <main-favorite-company></main-favorite-company>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {ref} from 'vue'
import MainFavoritePosition from '@/components/students/mains/MainFavoritePosition.vue' 
import MainFavoriteCompany from '@/components/students/mains/MainFavoriteCompany.vue' 
export default{
    name:'Favorite',
    props:{

    },
    components:{
MainFavoritePosition,MainFavoriteCompany
    },
    setup(props,ctx){
    
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>