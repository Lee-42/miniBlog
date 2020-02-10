<template>
  <div class="home">
    <!-- <canvas id="sakura"></canvas> -->
    <img class="bg-img" src="../assets/Hero-europe.jpg" alt="">
      <div class="content">
        <div class="home-header">
        <div class="link">
          <img  class="home-logo"
                src="../assets/userlogo.jpg" 
                alt="Lee logo">
        </div>
      </div>
      <div class="home-body">
        <div class="list">
          <router-link to="/articles" class="link">文章</router-link>
          <span class="link">项目</span>
          <span class="link">github</span>
          <span class="link">知乎</span>
        </div>
      </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>


<style lang="scss" scoped>
  .home {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .bg-img {
      width: 100%;
      height: 100%;
    }
    .content {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      padding-top: 8%;

      .home-logo {
        width: 130px;
        border-radius: 50%;
        border: 5px solid rgba($color: #000, $alpha: 0.1);
        animation: mylogo 4s;
        -moz-animation: mylogo 4s;
        -webkit-animation: mylogo 4s;
        -o-animation: mylogo 4s;
        animation-iteration-count: infinite;
      }
      .home-logo {
        cursor: pointer;
      }

      .home-header {
        .link {
          display: block;
        }
      }

      .home-body {
        padding-top: 20px;
        .list {
          .link {
            display: inline-block;
            padding: 20px;
            
            color: #FFF;
            font-size: 23px;
            min-width: 80px;
          }
          .link:hover {
            color: #000;
            text-shadow: #FFF;
            cursor: pointer;
          }
        }
      }
    }
  }


  @keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
    50% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 1;
    }
    100% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
  }

  @-moz-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
    50% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 1;
    }
    100% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
  }

  @-webkit-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
    50% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 1;
    }
    100% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
  }

  @-o-keyframes mylogo {
    0% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
    50% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 1;
    }
    100% {
      transform: rotate(0deg) scale(0.9, 0.9);
      opacity: 1;
    }
  }
</style>

