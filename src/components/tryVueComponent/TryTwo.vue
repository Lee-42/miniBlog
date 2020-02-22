<template>
    <div>
        <h1>尝试使用vue-property-decorator</h1>
        <p>propA: {{propA}}</p>       
        <p>propB: {{propB}}</p>
        <p>propC: {{propC}}</p>
        <p>propD: {{propD}}</p>
    </div>
</template>


<script lang="ts">

// export default {
//     props:{
//         propA: Number,
//         propB: {
//             type: String,
//             default: "default value"
//         },
//         propC: [String, Boolean],
//         propD: {type: null}
//     },

//     methods: {
//         onChildChanged(val, oldVal) {}
//     },

//     watch: {
//         'child' : {
//             handler : "onChildChanged",
//             //为了发现对象内部值的变化，可以在选项参数中指定 deep: true 。注意监听数组的变动不需要这么做。
//             immediate: false,
//             //在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
//             deep: false
//         }
//     }
// }


import { Component, Emit, Inject, Model, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {

    @Prop()
    propA: number = 1

    @Prop({ default: 'default value' })
    propB!: string

    @Prop([String, Boolean]) 
    propC!: string | boolean

    @Prop( {} )
    propD:any

    @Watch("child")
    onChildChanged(val:string, oldVal:string){}
}




</script>



<style lang="">
    
</style>



