<template>
    <div>
        <div class="block">
            <span class="demonstration">r</span>
            <el-slider v-model="value" max="255"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">g</span>
            <el-slider v-model="value1" max="255"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">b</span>
            <el-slider v-model="value2" max="255"></el-slider>
        </div>
        <div>
            <div style="width: 200px; height: 200px;" id="color">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value: 0,
            value1: 0,
            value2: 0
        }
    },
    watch: {
        value: function(){
            $("#color").style.background = `rgb(${this.value}, ${this.value1}, ${this.value2})`;
        },
        value1: function(){
            $("#color").style.background = `rgb(${this.value}, ${this.value1}, ${this.value2})`;
        },
        value2: function(){
            $("#color").style.background = `rgb(${this.value}, ${this.value1}, ${this.value2})`;
        }
    }
}
</script>
<style>

</style>