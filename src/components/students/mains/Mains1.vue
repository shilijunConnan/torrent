<template>
<router-view>
    <el-row>
        <el-col :span="1"></el-col>
        <el-col :span="22">
            <el-carousel :interval="2000" type="card" height="400px">
            <el-carousel-item>
                <img src='https://tse3-mm.cn.bing.net/th/id/OIP-C.JkSPyn4GtFqIf6k99MlcoQHaEo?w=263&h=180&c=7&r=0&o=5&pid=1.7'>
            </el-carousel-item>
            <el-carousel-item>
                <img src='https://tse1-mm.cn.bing.net/th/id/OIP-C.JtDLF3exYxqChPwCm7NYjAHaEo?w=263&h=180&c=7&r=0&o=5&pid=1.7'>
            </el-carousel-item>
            <el-carousel-item>
                <img src='https://tse1-mm.cn.bing.net/th/id/OIP-C.RqGXh6lzEkeql0-N0mUDYQHaEo?w=263&h=180&c=7&r=0&o=5&pid=1.7'>
            </el-carousel-item>
        </el-carousel>
        </el-col>
        <el-col :span="1"></el-col>

    </el-row>
    <router-link  to='/students/hall' class="globa_router_link"><h2>进入会场&ensp;&ensp;>></h2></router-link>
    <el-row>&ensp;</el-row>
    <el-row class="about">
        <el-col :span="1"></el-col>
        <el-col :span="2" class="about1">关<br>于<br>我<br>们</el-col>
        <el-col :span="20" class='about2'>
            
关于我们团队的组成、项目的设计理念。可替换成Torrent校招网的发展历程.
关于我们团队的组成、项目的设计理念。可替换成Torrent校招网的发展历程。
关于我们团队的组成、项目的设计理念。可替换成Torrent校招网的发展历程。
关于我们团队的组成、项目的设计理念。可替换成Torrent校招网的发展历程。
关于我们团队的组成、项目的设计理念。可替换成Torrent校招网的发展历程。


        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
    <el-row class="about">
        <el-col :span="1"></el-col>
        <el-col :span="2" class="about1">联<br>系<br>我<br>们</el-col>
        <el-col :span="20" class='about2'>    
            邮箱：torren@163.com<br>
            电话：8008208820<br>
            地址：湖北省武汉市中南财经政法大学电子信息
                    </el-col>
                    <el-col :span="1"></el-col>
    </el-row>
    </router-view>
</template>

<script>
import {ref} from 'vue'
import { Edit,Right } from "@element-plus/icons";
export default{
    name:'Mains1',
    props:{

    },
    components:{
Edit,Right
    },
    setup(props,ctx){
        
        return{
        }
    }
}
</script>

<style lang='scss' scoped>

img{
    width:800px;
    height:400px;
}
 
.about{
    margin: 50px 0 100px 0;
    .about1{
        font-size: $global_font*2;
        font-weight: bold;
    }
    .about2{
        font-size: $global_font;
        letter-spacing: 2px;
        line-height: 30px;
    }
}
</style>