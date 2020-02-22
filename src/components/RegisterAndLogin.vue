<template>
    <el-dialog title="登录"
               :width="isMobile ? '90%' : '50%' "
               :visible="dialogVisible"
               @close="cancel">
        <el-form>
            <el-form-item label="邮箱"
                          :label-width="formLabelWidth">
                <el-input v-model="params.email"
                          placeholder="邮箱"
                          auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          :label-width="formLabelWidth">
                <el-input v-model="params.password"
                          type="password"
                          placeholder="密码"
                          autofocus="off"></el-input>
            </el-form-item>
            <el-form-item v-if="handleFlag === 'register'"
                          label="昵称"
                          :label-width="formLabelWidth">
                <el-input v-model="params.name"
                          placeholder="用户名或昵称"
                          auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="handleFlag === 'register'"
                          label="手机"
                          :label-width="formLabelWidth">
                <el-input v-model="params.phone"
                          placeholder="手机号"
                          auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item v-if="handleFlag === 'register'"
                          label="简介"
                          :label-width="formLabelWidth">
                <el-input v-model="params.desc"
                          placeholder="个人简介"
                          auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
            <el-button type="success"
                       @click="handleOAuth">github授权登录</el-button>
            <el-button v-if="handleFlag === 'login'"
                       :loading="btnLoading"
                       type="primary"
                       @click="handleOk('login')">登录</el-button>
            <el-button v-if="handleFlag === 'register'"
                       :loading="btnLoading"
                       type="primary"
                       @click="handleOk('register')">注册</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">

import { Component, Vue, Emit, Prop } from "vue-property-decorator";
import { RegAndLogParams, UserInfo } from "../type/index"
import { Message } from 'element-ui';

@Component({

})

export default class RegisterAndLogin extends Vue {
    @Prop({ default: false }) visible!: boolean;
    @Prop({ default: false }) handleFlag!: string;
    @Prop({ default: false }) isMobile!: string;

    //初始化数据
    private btnLoading: boolean = false;
    private formLabelWidth: string = this.isMobile ? "40px" : "60px";
    private params: RegAndLogParams = {
        email: "",
        name: "",
        password: "",
        phone: "",
        desc: ""
    };

    mounted() {}


    get dialogVisible(): boolean {
        console.log(this.visible);
        return this.visible;
    }


    private handleOAuth(): void {

    }

    private handleOk(): void {
        const reg = new RegExp(
            "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
        ); //正则表达式
        if (!this.params.email) {
            // console.log("邮箱不能为空!")
            // Message.warning("邮箱不能为空!");
            this.$message({
                message: "邮箱不能为空!",
                type: "warning"
            })
            return;
        }else if (!reg.test(this.params.email)) {
            // console.log("请输入格式正确的邮箱!")
            this.$message({
                message: "请输入格式正确的邮箱!",
                type: "warning"
            });
            return;
        }
        if (this.handleFlag === "register") {
            if (!this.params.password) {
                this.$message({
                    message: "密码不能为空!",
                    type: "warning"
                });
                return;
            }else if(!this.params.name) {
                this.$message({
                    message: "用户名不能为空!",
                    type: "warning"
                });
                return;
            }
            const re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if(!this.params.phone && !re.test(this.params.phone)) {
                this.$message({
                    message: "请输入正确的手机号!",
                    type: "warning"
                });
                return;
            }
        }
        this.submit();
    }

    //this.$emit
    @Emit()
    private cancel(): boolean {
        // console.log("cancel");
        return false;
    }

    @Emit("ok")
    private async submit(): Promise<void>{
        console.log("注册或登录");
        let data: any = "";
        this.btnLoading = true;
        if (this.handleFlag === "register") {
            data = await this.$https.post(this.$urls.register, this.params);
        }else {
            data = await this.$https.post(this.$urls.login, this.params);
        }
        console.log(data);
        this.btnLoading = false;

        const userInfo: UserInfo = {
            _id: data._id,
            name: data.name,
            avatar: data.avatar
        };
        this.$store.commit("SAVE_USER", {
            userInfo
        });
        window.sessionStorage.userInfo = JSON.stringify(userInfo);
        this.$message({
            message: "操作成功",
            type: "success"
        });
    }
}
</script>


<style lang="scss">
    
</style>



