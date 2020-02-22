import { Component, Emit, Inject, Model, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export class MyComponent extends Vue {

    @Prop()
    propA: number = 1

    @Prop({ default:'default value' })
    propB:string

    @Prop( [String, Boolean] )
    propC: string|boolean

    @Prop( {} )
    propD:any

    @Watch("child")
    onChildChanged(val:string, oldVal:string){}
}




