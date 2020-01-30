<template>
    <div>
        <h1>尝试使用vue-component</h1>
        <input v-model="msg">
        <p>prop:{{propMessage}}</p>
        <p>msg:{{msg}}</p>
        <p>helloMsg:{{helloMsg}}</p>
        <p>computed msg:{{computedMsg}}</p>
        <button @click="greet" >button</button>
    </div>
</template>


<script>

// export default {
//     props:{
//         propMessage:{
//             type:String
//         }
//     },

//     data(){
//         return {
//             msg: 123,
//             helloMsg: 'Hello, ' + this.propMessage
//         }
//     },

//     mounted() {
//         this.greet()
//     },

//     computed: {
//         computedMsg(){
//             return 'computed ' + this.msg
//         }
//     },

//     methods:{
//         greet(){
//             alert("greeting: " + this.msg)
//         }
//     }
// }




import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        propMessage: String
    }
})

export default class App extends Vue {
    msg = 123

    helloMsg = 'Hello, ' + this.propMessage

    mounted() {
        this.greet()
    }

    get computedMsg(){
        return 'computed' + this.msg
    }

    greet(){
        alert('greeting: ' + this.msg)
    }
}


</script>



<style lang="">
    
</style>



