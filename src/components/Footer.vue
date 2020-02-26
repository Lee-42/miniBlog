<template>
    <div class="footer">©2020 Created by Lee</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue{
    
}
</script>

<style lang="scss" scoped>
    .footer {
        text-align: center;
        padding: 20px;
        font-weight: bold;
    }
</style>