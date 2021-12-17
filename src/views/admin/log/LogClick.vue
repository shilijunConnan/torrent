<template>
{{test}}
</template>

<script>
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
export default{
    name:'LogClick',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        console.log('刷新')
        let route=useRoute()
        let router=useRouter()
        
        let test=route.query.uid
        console.log(test)
        return{
test
        }
    }
}
</script>

<style lang='scss' scoped>

</style>