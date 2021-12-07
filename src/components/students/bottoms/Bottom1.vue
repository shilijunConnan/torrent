<template>
<div class="bottom">
    <el-row>
        <el-col :span="6">
        </el-col>
        <el-col :span="4">Copyright © 2021 Torrent.com
        </el-col>
        <el-col :span="2">隐私政策
        </el-col>
        <el-col :span="2">使用条款 
        </el-col>
        <el-col :span="2">销售政策 
        </el-col>
        <el-col :span="2">法律信息
        </el-col>
        <el-col :span="6">
        </el-col>
    </el-row>
    <el-row>
        &ensp;
    </el-row>
    <el-row>
        <el-col :span="10">
        </el-col>
        <el-col :span="3">京ICP备1021463xx
        </el-col>
        <el-col :span="2">营业执照
        </el-col>
        <el-col :span="9">
        </el-col>
    </el-row>
</div>
</template>

<script>
export default{
    name:'Bottom1',
    props:{

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
.bottom{
    margin: 50px 0;
    color:$global_yellow_color;
    font-size: 1*$global_font;
}
</style>