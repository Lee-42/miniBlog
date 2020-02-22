<template>
    <div style="width: 100%">
        <div class="article clearfix">
            <div v-show="!isLoading"
                 :style="{'width': isMobileOrPc ? '100%': '755'}"
                 class="article-left fl">
                <div class="header">
                    <h1 class="title">{{articleDetail.title}}</h1>    
                    <div class="author">
                        <div class="avatar">
                            <img class="auth-logo"
                                 src="../assets/userlogo.jpg" 
                                 alt="Lee">
                        </div>
                        <div class="info">
                            <span class="name">
                                <span>{{articleDetail.author}}</span>
                            </span>
                            <div props-data.classes="user-follow-button-header"
                                 data-author-follow-button=''></div>
                            <div class="meta">
                                <span class="publish-time">
                                    {{articleDetail.create_time}}
                                </span>
                                <span class="wordage">
                                    字数 {{articleDetail.numbers}}
                                </span>
                                <span class="view-count">
                                    阅读 {{articleDetail.meta.views}}
                                </span>
                                <span class="comments-count">
                                    评论 {{articleDetail.meta.comments}}
                                </span>
                                <span class="likes-count">
                                    喜欢 {{articleDetail.meta.likes}}
                                </span>
                            </div>
                        </div>
                        <div class="tags">
                            <el-tag size="mini"
                                    v-for="tag in articleDetail.tags"
                                    :key="tag._id"
                                    class="tag"
                                    type="success">{{tag.name}}</el-tag>
                        </div>
                        <span class="clearfix"></span>
                    </div>
                </div>   
                <div class="content">
                    <div id='content'
                         class="article-detail"
                         v-html="articleDetail.content">
                    </div>
                </div>
                <div class="heart">
                    <el-button type="danger"
                               size="large"
                               icon="heart"
                               :loading="isLoading"
                               @click="likeArticle">
                        点赞
                    </el-button>
                </div>  
                <div class="comment">
                    <el-input placeholder="你的看法很重要!"
                              type="textarea"
                              v-model="content"></el-input>
                    <el-button style="margin-top: 15px"
                               type="primary"
                               :loading="btnLoading"
                               @click="handleAddComment">发送</el-button>
                </div>
                <!-- CommentList组件 -->
            </div>
            <div v-if="!isMobileOrPc"
                 style="width: 23%"
                 class="article-right fr anchor"
                 v-html="articleDetail.toc"></div>
            <LoadingCustom v-if="isLoading"></LoadingCustom>
        </div>
    </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import {
    timestampToTime,
    getQueryStringByName,
    isMobileOrPc
} from "../../src/utils/urls";
import markdown from ""


export default class ArticleDetail extends Vue{
    
}
</script>

<style lang="scss" scoped>
    
</style>

