<template>
  <div class="home">
    <div class="home-left">
      <div class="left" @click="changeColor">
        <img src="../../assets/images/z.png" />
      </div>
      <div class="middle">
        <div class="middle-top" @click="changeColor">
          <img src="../../assets/images/s.png" />
        </div>
        <div class="middle-middle">
          <div class="color-hidden" v-show="show">GET IT!</div>
          <textarea id="textarea"></textarea>
          <div
            v-for="item in colorStyle"
            :key="item.background"
            class="color"
            :style="{'background': item.background}"
            @mouseover="mouseMoveAndOut($event, mouse='over')"
            @mouseout="mouseMoveAndOut($event, mouse='out')"
            @mousedown="mouseMoveAndOut($event, mouse='down')"
            @mouseup="mouseMoveAndOut($event, mouse='up')"
          >
            <button>GET IT!</button>
          </div>
        </div>
        <div class="middle-bottom" @click="changeColor">
          <img src="../../assets/images/x.png" />
        </div>
      </div>
      <div class="right" @click="changeColor">
        <img src="../../assets/images/y.png" />
      </div>
    </div>
    <div class="home-right">
      <div class="home-right-1">
        <img src="../../assets/images/s.png" />
      </div>
      <div class="home-right-2">2</div>
      <div class="home-right-3">
        <img src="../../assets/images/x.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorStyle: [
        { background: "#1abc9c" },
        { background: "#2ecc71" },
        { background: "#3498db" },
        { background: "#9b59b6" },
        { background: "#34495e" },
        { background: "#f1c40f" },
        { background: "#e67e22" },
        { background: "#e74c3c" },
        { background: "#ecf0f1" }
      ],
      show: false
    };
  },
  methods: {
    mouseMoveAndOut(e, mouse) {
      if (mouse === "over") {
        e.currentTarget.getElementsByTagName("button")[0].style.display =
          "block";
      } else if (mouse === "out") {
        e.currentTarget.getElementsByTagName("button")[0].style.display =
          "none";
      } else if (mouse === "down") {
        e.currentTarget.getElementsByTagName("button")[0].style.transform =
          "scale(0.9)";
      } else if (mouse === "up") {
        e.currentTarget.getElementsByTagName("button")[0].style.transform =
          "scale(1)";
        var colorHidden = document.getElementsByClassName("color-hidden")[0];
        colorHidden.style.background = e.currentTarget.style.background;
        e.currentTarget.getElementsByTagName("button")[0].style.display =
          "none";
        this.colorCopy(e.currentTarget.style.background);
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 500);
      }
    },
    //复制功能
    colorCopy(color) {
      var textarea = document.getElementById("textarea");
      textarea.value = color;
      textarea.select();
      document.execCommand("copy");
    },
    //十六进制颜色随机生成
    changeColor() {
      let colorArr = [];
      for (var i = 0; i < 9; i++) {
        colorArr.push({
          background: "#" + Math.floor(Math.random() * 0xffffff).toString(16)
        });
      }
      this.colorStyle = colorArr;
    },
    //十六进制颜色和rgb转换
    colocConversion(color) {
      var color1 = color.slice(1);
      var rgb = `rgb(${parseInt(color1.slice(0, 2), 16).toString(
        10
      )},${parseInt(color1.slice(2, 4), 16).toString(10)},${parseInt(
        color1.slice(4, 6),
        16
      ).toString(10)})`;
      return rgb;
    },
    //十六进制颜色和rgba转换
    colocConversionA(color) {
      var color1 = color.slice(1);
      var rgba = `rgba(${parseInt(color1.slice(0, 2), 16).toString(
        10
      )},${parseInt(color1.slice(2, 4), 16).toString(10)},${parseInt(
        color1.slice(4, 6),
        16
      ).toString(10)}, 1)`;
      return rgba;
    }
  }
};
</script>
<style>
.home {
  margin: 0 0;
  padding: 0 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.home-left {
  width: 90%;
  height: 100%;
  border-right: 1px solid #d35400;
  display: grid;
  grid-template-columns: 5% 90% 5%;
  margin: 0 0;
  padding: 0 0;
}

.home-left .left {
  margin: 0 0;
  padding: 0 0;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: solid 1px rgba(230, 126, 34, 1);
  background: rgba(0, 0, 0, 0.2);
}

.home-left .left img {
  width: 100%;
  height: 30%;
}

.home-left .middle {
  margin: 0 0;
  padding: 0 0;
  border-radius: 0;
  border-right: solid 1px rgba(230, 126, 34, 1);
  display: grid;
  grid-template-rows: 8% 84% 8%;
}

.home-left .middle .middle-top {
  margin: 0 0;
  padding: 0 0;
  background: rgba(0, 0, 0, 0.2);
}

.middle-top img {
  width: 25%;
  height: 100%;
}

.home-left .middle .middle-middle {
  /* margin: 0.9375rem 0.9375rem; */
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 117, 1),
    rgba(162, 155, 254, 1)
  );
}
.home-left .middle .middle-bottom {
  margin: 0 0;
  padding: 0 0;
  background: rgba(0, 0, 0, 0.2);
}

.middle-bottom img {
  width: 25%;
  height: 100%;
}

.home-left-grid {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 117, 1),
    rgba(162, 155, 254, 1)
  );
}

.home-left .right {
  margin: 0 0;
  padding: 0 0;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.right img {
  width: 100%;
  height: 30%;
}

.home-right {
  width: 10%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 8% 84% 8%;
}

.color-hidden {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  color: white;
}

.color {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

button {
  width: 6rem;
  height: 3rem;
  border-radius: 0.3125rem;
  border: 0.125rem solid rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0);
  outline: none;
  display: none;
}

textarea {
  position: absolute;
  z-index: -10;
}
.home-right-1{
  border-bottom: 1px solid #e67e22;
  background: rgba(0, 0, 0, 0.2);
}

.home-right-1 img{
  width: 100%;
  height: 100%;
}
.home-right-2{
  border-bottom: 1px solid #e67e22;
}

.home-right-3{
  background: rgba(0, 0, 0, 0.2);
}

.home-right-3 img{
  width: 100%;
  height: 100%;
}
</style>