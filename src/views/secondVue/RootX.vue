<template>
    <div class="root">
        <HeaderX></HeaderX>
        <div class="root-div" v-for="(item, index) in items" :key="index">
            <div>
                <router-link to="user">
                    <img :src="item.src" @click="user">
                </router-link>
            </div>
            <div>
                <p>{{item.num}}</p>
            </div>
            <div>
                <router-link to="text" class="aStyle">
                    {{item.describe}}
                </router-link>
            </div>
            <div>
                <p>{{item.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { getData } from '../../api/data';
import axios from 'axios';
import HeaderX from './HeaderX';
export default {
    components:{
        HeaderX,
    },
    data(){
        return{
            items: []
        }
    },
    created(){
        axios.get('http://localhost:3000/data.json').then(data=>{
            console.log(data.data);
            this.items = data.data;
        })
    }
}
</script>
<style>
.root{
    margin-left: 40px;
    height: 40px;
}
.root-div{
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: 5% 10% 75% 10%;
    border-bottom: 1px solid black;
}
.root-div div{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.root-div div:nth-child(1) img{
    width: 50%;
    height: 50%;
}
.aStyle{
    color: white;
    text-decoration: none;
}
</style>