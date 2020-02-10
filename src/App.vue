<template>
  <div id="app"
       class="container">
    <Nav v-if="isShowNav"></Nav>
    <router-view />
  </div>
</template>

<script lang="ts">

import { Vue, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import { Route } from "vue-router";
import Nav from "../src/components/Nav.vue";


@Component({
  components: {
    Nav
  }
})

export default class App extends Vue {
  private isShowNav: boolean = false;

  mounted(): void {
    
  }

  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void{
    // const referrer: any = document.getElementById("referrer");
    if(val.path === "/") {
      this.isShowNav = false;
    }else {
      this.isShowNav = true;
    }
  }
}
</script>

<style lang="scss" scoped>

@import url("../src/sass/reset.scss");


</style>



