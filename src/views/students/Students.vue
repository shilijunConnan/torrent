<template> 
<router-view></router-view>
</template>

<script>
import Home from './Home.vue'
export default{
    name:'Students',
    props:{
    },
    components:{
        
Home
    },
    setup(props,ctx){
        console.log('student')
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
</style>