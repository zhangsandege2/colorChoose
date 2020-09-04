<template>
    <div class="index">
        <div class="index-home">
            <div class="home-one" @click="changeColor">
                <img src="../../assets/images/z.png" />
            </div>
            <div class="home-two">
                <div class="two-one" @click="changeColor">
                    <img src="../../assets/images/s.png" />
                </div>
                <div class="two-two">
                    <div class="colorBackground">
                        <div>
                            <p>GET IT!</p>
                        </div>
                    </div>
                    <textarea id="textarea"></textarea>
                    <div class="colorChoose" v-for="item in colors" :key="item.background" :style="{background: item.background}"
                    @mouseover="chooseColor($event, mouse='over')" @mouseout="chooseColor($event, mouse='out')"
                    @mousedown="chooseColor($event, mouse='down')" @mouseup="chooseColor($event, mouse='up')">
                        <button>GET IT?</button>
                    </div>
                </div>
                <div class="two-three" @click="changeColor">
                    <img src="../../assets/images/x.png" />
                </div>
            </div>
            <div class="home-three" @click="changeColor">
                <img src="../../assets/images/y.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    //九宫格颜色选择
    data(){
        return{
            colors:[
                {background: "#ff9ff3"},
                {background: "#feca57"},
                {background: "#ff6b6b"},
                {background: "#48dbfb"},
                {background: "#1dd1a1"},
                {background: "#00d2d3"},
                {background: "#54a0ff"},
                {background: "#5f27cd"},
                {background: "#c8d6e5"},
            ]
        }
    },
    methods:{
        chooseColor(e, mouse){
            if(mouse === "over"){
                e.currentTarget.getElementsByTagName("button")[0].style.display = "block";
            }else if(mouse === "out"){
                e.currentTarget.getElementsByTagName("button")[0].style.display = "none";
            }else if(mouse === "down"){
                e.currentTarget.getElementsByTagName("button")[0].style.transform = "scale(0.9)";
            }else if(mouse === "up"){
                var button = e.currentTarget.getElementsByTagName("button")[0];
                button.style.transform = "scale(1)";
                var colorBackground = document.getElementsByClassName("colorBackground")[0];
                colorBackground.style.background = e.currentTarget.style.background;
                button.style.display = "none";
                colorBackground.style.display = "block";
                this.copyColor(e.currentTarget.style.background)
                setTimeout(function(){
                    colorBackground.style.display = "none";
                }, 500);
            }
        },
        //颜色复制功能，rgb()
        copyColor(color){
            var textarea = document.getElementById("textarea");
            textarea.value = color;
            textarea.select();
            document.execCommand("copy");
        },
        //获取随机颜色
        changeColor() {
            let colorArr = [];
            for (var i = 0; i < 9; i++) {
                colorArr.push({
                    background: "#" + Math.floor(Math.random() * 0xffffff).toString(16)
                });
            }
            this.colors = colorArr;
        },
    }
}
</script>
<style>
.index{
    width: 100vw;
    height: 100vh;
    margin: 0 0;
    padding: 0 0;
}
.index-home{
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 100vh;
}
.home-one{
    border-right: 1px dashed #e67e22;
    background-color: rgba(131, 149, 167, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.home-one img{
    width: 100%;
    height: 50%;
}
.home-two{
    border-right: 1px dashed #e67e22;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 8% 84% 8%;
}
.two-one{
    border-bottom: 1px dashed #e67e22;
    background-color: rgba(131, 149, 167, 0.3);
}
.two-one img{
    height: 100%;
    width: 35%;
}
.two-two{
    border-bottom: 1px dashed #e67e22;
    display: grid;
    grid-template-rows: repeat(3, 33.33%);
    grid-template-columns: repeat(3, 33.33%);
    position: relative;
}
.colorBackground{
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
}
.colorBackground div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.colorBackground div p{
    font-size: 2rem;
    padding: 1.25rem 1.25rem;
    border: solid 1px rgba(0, 0, 0, 1);
}
.colorChoose{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.colorChoose button{
    background: rgba(0, 0, 0, 0);
    width: 30%;
    height: 20%;
    outline: none;
    border: 1px solid black;
    display: none;
}
textarea{
    position: absolute;
    z-index: -1000;
}
.two-three{
    background-color: rgba(131, 149, 167, 0.3);
}
.two-three img{
    width: 35%;
    height: 100%;
}
.home-three{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(131, 149, 167, 0.3);
}
.home-three img{
    width: 100%;
    height: 50%;
}
</style>