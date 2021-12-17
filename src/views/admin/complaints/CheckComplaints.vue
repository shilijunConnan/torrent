<template>
{{complaint_id}}
</template>
// 0投诉原因-1处理结果
<script>
import {ref} from 'vue'
export default{
    name:'CheckComplaints',
    props:{
complaint_id:{
    type:Number
}
    },
    components:{

    },
    setup(props,ctx){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>

</style>