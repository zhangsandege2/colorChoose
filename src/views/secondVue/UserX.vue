<template>
    <div class="user">
        <HeaderX></HeaderX>
        <div class="title">
            <h2>名字</h2>
            <h2>3000积分</h2>
            <h3>注册时间：4年前</h3>
        </div>
        <el-divider></el-divider>
        <div class="reply">
            <h3>回复的主题</h3>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
        <el-divider></el-divider>
        <div class="create">
            <h3>创建的主题</h3>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </div>
</template>
<script>
import HeaderX from './HeaderX'
export default {
    components:{
        HeaderX
    }
}
</script>
<style>
.user{
    margin: 0 100px 0 100px;
}
.title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title h2{
    margin: 10px;
}
.title h3{
    margin: 10px;
}
.reply{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
}
.reply h3{
    margin: 10px;
}
.reply ul{
    list-style: none;
    margin: 10px;
}
.reply ul li{
    margin: 10px;
}
.create{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
}
.create h3{
    margin: 10px;
}
.create ul{
    list-style: none;
    margin: 10px;
}
.create ul li{
    margin: 10px;
}
.el-divider{
    margin: 10px;
}
</style>