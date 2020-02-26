<template>
  <div id="app"
       class="container">
    <Nav v-if="isShowNav"></Nav>
    <div class="layout">
      <router-view />

    </div>
    <Footer v-show="isShowNav"></Footer>
  </div>
</template>

<script lang="ts">

import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import Nav from "../src/components/Nav.vue";
import Footer from "../src/components/Footer.vue";

@Component({
  components: {
    Nav,
    Footer
  }
})

export default class App extends Vue {
  private isShowNav: boolean = false;

  mounted(): void {
    this.routeChange(this.$route, this.$route);
  }

  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void{
    const referrer: any = document.getElementById("referrer");
    if(val.path === "/") {
      this.isShowNav = false;
      referrer.setAttribute("content", "always");
    }else {
      this.isShowNav = true;
      referrer.setAttribute("content", "never");
    }
  }
}
</script>

<style lang="scss" scoped>

@import url("../src/sass/reset.scss");

#app {
  font-family: "Arial", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  padding-top: 61px;
}

</style>



