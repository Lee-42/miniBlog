<template>
    <div class="loading">
        <img src="../assets/loading.svg" alt="加载中...">
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

//自定义加载
@Component
export default class LoadingCustom extends Vue {

}

</script>

<style lang="scss" scoped>
    .loading {
        text-align: center;  
        padding: 30px;
    }
</style>

<style lang="scss" scope>
    .loading {
        width: 100%;
    }
</style>


