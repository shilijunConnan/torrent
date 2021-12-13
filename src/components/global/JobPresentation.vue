<template>
<div class="job-pre">
    <el-row>
        <el-col :span="18">
            <div style="font-size:35px;font-weight:bold">{{job.name}}</div>    
            <el-row style="margin:20px 0;">
                <el-col :span="2">{{job.local}}</el-col>
                <el-col :span="1">|</el-col>
                <el-col :span="2">{{job.exp}}</el-col>
                <el-col :span="1">|</el-col>
                <el-col :span="2">{{job.edu}}</el-col>
                <el-col :span="1">|</el-col>
                <el-col :span="2">{{job.kind}}</el-col>
                <el-col :span="1">|</el-col>
                <el-col :span="2">招{{job.count}}人</el-col>
                <el-col :span="10"></el-col>
            </el-row>
            <div style="font-size:27px;color:rgb(230 162 60)">{{job.salary1}}k&ensp;-&ensp;{{job.salary2}}k</div>
        </el-col>
        <el-col :span="6" style="text-align:right;">
            <div v-if="role==1">
                <el-button type="primary">收藏</el-button><br><br>
                <el-button type="success">申请</el-button>
            </div>
            <div v-else><el-button>编辑</el-button></div>
        </el-col> 
    </el-row><br><br><hr>
    <el-row>
        <el-col :span="17">
            <h3>岗位描述</h3><br>
            <div style="line-height:25px"><span v-for="(item,index) in job.label" :key="index">{{item}}&ensp;&ensp;</span></div><br>
            <h3>岗位职责</h3><br>
            <div style="line-height:25px">{{job.des}}</div><br>
            <h3>岗位要求</h3><br>
            <div style="line-height:25px">{{job.demand}}</div><br>
            <h3>岗位福利</h3><br>
            <div style="line-height:25px">{{job.welfare}}</div><br>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="6" style="text-align:left;font-size:13px; line-height:30px">
            <p class="one-line">{{company.name}}</p>
            <p class="one-line">经营范围：{{company.range}}</p>
            <p class="one-line">员工人数：{{company.number}}</p>
            <p class="one-line">联系电话：{{company.phone}}</p>
            <p class="one-line">官方网站：<a :href="company.site">{{company.site}}</a></p>
            <p class="three-line">公司简介：{{company.des}}</p>
            <br>
            <p style="text-align:right"><el-button plain @click="toCompany">公司主页</el-button></p>
        </el-col> 
    </el-row>
    
</div>
</template>

<script>
import {ref} from 'vue'
export default{
    name:'JobPresentation',
    props:{

    },
    components:{

    },
    setup(props,ctx){
        let role=ref(1)
        let job={
                name:'java开发'
                ,salary1:'10'
                ,salary2:'18'
                ,local:'武汉'
                ,edu:'本科'
                ,exp:'1-3年'  
                ,kind:'全职'
                ,count:'3'
                ,label:[
                    'java','编程','mysql'
                ]
                ,des:`1，根据产品需求，负责业务功能的开发和维护：
                    2，根据产品设计的业务模型进行功能设计、数据结构设计
                    3，根据现有架构不断完善业务需求，实现具体的业务功能模块和子系统
                    4，和前端以及算法工程师配合、联调，完成整体的项目交付`  
                ,demand:`1，熟悉Java编程语言和Web项目开发经验
                    2，熟悉面向对象设计开发，对部分Java 技术有深入研究，熟悉常见设计模式
                    3，熟悉http 协议、缓存、jvm 调优、序列化、nio、RPC 调用框架等
                    4，熟悉后台微服务和分布式系统的设计和开发，熟悉Spring Cloud微服务、Spring Boot或Dubbo等至少一种开发框架`
                ,welfare:`五险一金    年底双薪    周末双休    带薪年假    定期体检    全勤奖`
            }
        let company={
            name:'星尘有限公司'
            ,range:'互联网'
            ,number:'200'
            ,phone:'15278978796'
            ,site:`https://www.baidu.com/`
            ,des:`全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库`
        }
        let toCompany=()=>{
            window.open('/students/company','_blank')
        }
        return{
            job,company,toCompany,role
        }
    }
}
</script>

<style lang='scss' scoped>
.job-pre{
    margin: 50px auto;
    box-shadow: 0 0 5px 5px rgb(219, 213, 213);
    width:70%;
    padding:80px 80px;
    background-color: white;
    row{
        align-items: flex-end;
    }
    .one-line{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .three-line{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
</style>