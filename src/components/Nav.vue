<template>
    <div>
        <div v-if="!isMobile"
             class="nav">
            <div class="nav-content">
                <el-row :gutter="20">
                    <el-col :span="3">
                        <router-link to="/">
                            <img class="logo"
                                 src="../assets/userlogo.jpg" 
                                 alt="Lee logo">
                        </router-link>
                    </el-col>
                    <el-col :span="16">
                        <el-menu :router="true"
                                 :default-active="activeIndex"
                                 active-text-color="#409eff"
                                 class="el-menu-demo"
                                 mode="horizontal"
                                 @select="handleSelect">
                            <el-menu-item v-for="l in list"
                                          :route="l.path"
                                          :index="l.index"
                                          :key="l.index">
                                {{l.name}}
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col v-if="userInfo._id"
                            :span="5">
                        <div class="nav-right">
                            <el-dropdown @command="handleLogout">
                                <span class="el-dopdown-link">
                                    {{userInfo.name}}
                                </span>
                                <img v-if="!userInfo.avatar"
                                     src="../assets/user.png" 
                                     alt="user"
                                     class="user-img">
                                <img v-if="userInfo.avatar"
                                     :src="userInfo.avatar"
                                     alt="user"
                                     class="user-img"> 
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                    <el-col v-else
                            :span="4">
                        <div class="nav-right">
                            <el-button size="small"
                                       type="primary"
                                       @click="handleClick('login')">登录</el-button>
                            <el-button size="small"
                                       type="danger"
                                       @click="handleClick('register')">注册</el-button>
                        </div>        
                    </el-col>
                </el-row>
            </div>
        </div>
        <div v-else
             class="nav">
           <div class="nav-mobile">
              <div class="nav-mobile-logo">
                <router-link to="/">
                    <img class="logo"
                         src="../assets/userlogo.jpg" 
                         alt="Lee logo">
                </router-link>
              </div>
              <div class="title">{{title}}</div>
              <div class="menu"
                @click="handleMenu"><i class="el-icon-menu"></i></div>
           </div>
            <div v-if="isShow"
                 class="nav-mobile-content">
              <div class="list">
                  <div class="item"
                       @click="handleClickMenu">
                      <router-link to="/">首 页</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/articles')">
                      <router-link to="/articles">文 章</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/archive')">
                      <router-link to="/archive">归 档</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/project')">
                      <router-link to="/project">项 目</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/timeline')">
                      <router-link to="/timeline">历 程</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/message')">
                      <router-link to="/message">留 言</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/about')">
                      <router-link to="/about">关 于</router-link>
                  </div>
                  <div class="item"
                       @click="handleClickMenu('/login')">
                       <span v-if="userInfo.id">{{userInfo.name}}</span>
                       <span v-else>登 录</span>
                  </div>
                  <div v-if="!userInfo.id"
                       class="item"
                       @click="handleClickMenu('/register')">
                      注 册
                  </div>
                  <div v-if="userInfo.id"
                       class="item"
                       @click="handleMenu('/logout')">
                       退 出
                  </div>
              </div>
          </div>
        </div>
        <div v-if="isShow"
             class="mask"
             @click="handleHideMenu"></div>
        <RegisterAndLogin :visible="visible"
                          :isMobile="isMobile"
                          :handleFlag="handleFlag"
                          @ok="handleOK"
                          @cancel="handleCancel"></RegisterAndLogin>
    </div>
</template>

<script lang="ts">

import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { UserInfo,NavListItem } from "../type/index";
import { isMobileOrPc } from "../utils/utils";
import RegisterAndLogin  from "../components/RegisterAndLogin.vue";

@Component({
    components:{
        RegisterAndLogin
    }
})

export default class Nav extends Vue{
    private visible: boolean = false;
    private handleFlag: string = "";
    private isShow: boolean = false;
    private list:Array<NavListItem> = [
        {
            index: "1",
            path: "/",
            name: "首页"
        },
        {
            index: "2",
            path: "/articles",
            name: "文章"
        },
        {
            index: "3",
            path: "/archive",
            name: "归档"
        },
        {
            index: "4",
            path: "/project",
            name: "项目"
        },
        {
            index: "5",
            path: "/message",
            name: "留言"
        },
        {
            index: "6",
            path: "/about",
            name: "关于"
        },
    ];

    // private isMobile: boolean = true; 
    private activeIndex: string = "0";
    private isMobile: boolean = isMobileOrPc();
    
    get userInfo(): UserInfo{
        let userInfo: UserInfo = {
            _id: "",
            name: "",
            avatar: ""
        }
        if(window.sessionStorage.userInfo){
            userInfo = JSON.parse(window.sessionStorage.userInfo);
            this.$store.commit("SAVE_USER", {
                userInfo
            });
        }
        if(this.$store.state.userInfo){
            userInfo = this.$store.state.userInfo;
        }
        return userInfo;
    }

    private handleMenu(): void {
        this.isShow = true;
    }
 
    private handleClickMenu(route: string): void {
        this.isShow = false;
        if (route === "/login") {
            this.handleFlag = "login";
            this.visible = true;
        }
        if (route === "/register") {
            this.handleFlag = "register";
            this.visible = true;
        }
        if (route === "/logout") {
            this.handleLogout();
        }
    }

    private handleCancel(value: boolean): void{
        this.visible = value;
    }

    private handleOK(value: boolean): void {
        this.visible = value;
    }

    private handleLogout(): void {
        window.sessionStorage.userInfo = "";
        this.$store.commit("SAVE_USER", {
            userInfo: {
                _id: "",
                name: "",
                avatar: ""
            }
        });
    }

    private handleClick(value: string): void {
        // console.log(value);
        this.handleFlag = value;
        this.visible = true;
    }

    private handleSelect(val: string, oldVal: string):void {
        console.log("val: ", val);
        console.log("oldval:", oldVal);
        this.activeIndex = val;    
    }

    
}
</script>

<style lang="scss">
    
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        background-color: #FFF;
        border-bottom: 1px solid #EEE;
        .nav-content {
            width: 1200px;
            margin: 0 auto;
            .logo {
                height: 50px;
                margin: 0;
                border-radius: 5px;
                margin-top: 5px;
            }
        }
        .el-menu--horizontal {
            border-bottom: none;
        }
        .el-menu--horizontal > .el-menu-item {
            cursor: pointer;
            color: #333;
        }

        .nav-right {
            position: relative;
            padding-top: 15px;
            text-align: right;
            .el-dropdown {
                cursor: pointer;
                padding-right: 60px;
            }
            .user-img {
                position: absolute;
                top: -15px;
                right: 0;
                width: 50px;
                border-radius: 5px;
            }
        }
    }
</style>


