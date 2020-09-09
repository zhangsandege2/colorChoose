<template>
    <div>
        <h1>这是第一个简单vue实验</h1>
        <div>
            <el-input v-model="input" @change="pushitem"></el-input>
            <ul>
                <li v-for="item in items" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input: '',
            items: []
        }
    },
    methods:{
        pushitem(){
            console.log("this is")
            this.items.push(this.input);
            this.input = '';
            console.log(this.items);
        }
    }
}
</script>