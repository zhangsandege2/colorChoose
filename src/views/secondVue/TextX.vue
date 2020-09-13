<template>
    <div>
    <HeaderX></HeaderX>
        <div class="text">
        <div class="left">
            这里是个markdown
        </div>
        <div>
            这里是个作者简介
        </div>
    </div>
    </div>
</template>
<script>
import HeaderX from './HeaderX';
export default {
    components:{
        HeaderX
    }
}
</script>
<style>
.text{
    margin-left: 50px;
    display: grid;
    grid-template-columns: 60% 40%;
    border-left: dashed 1px orangered;
}
.left{
    border-right: dashed 1px orange;
}
</style>