<template>
    <div class="comment-list">
        <div class="top-title">
            <span>{{numbers}}  评论</span>
        </div>
        <div v-for="(item, i) in list"
             :key="i"
             class="item">
            <div class="item-header">
                <div class="author">
                    <div class="avatar">
                        <img v-if="item.user.avatar.length < 10"
                             src="../assets/user.png" 
                             alt="默认图片">
                        <img v-else
                             :src="item.user.avatar"
                             alt="">
                    </div>
                </div>
                <div class="info">
                    <div class="name">
                        {{item.user.name}}
                        {{item.user.type === 0 ? "(作者)" : ""}}
                    </div>
                    <div class="comment-detail">{{item.content}}</div>
                    <div class="time">
                        <span>{{item.create_time}}</span>
                    </div>
                </div>
                <div class="item-comment"
                     @click="showCommentModal(item._id, item.user)">
                    <span class="message">回复</span>
                </div>
            </div>
            <!-- <div class="comment-detail">{{item.content}}</div> -->
            
            <div v-for="e in item.other_comments"
                 :key="e._id"
                 class="item-other">
                <div class="item-header">
                    <div class="author">
                        <div class="avatar">
                            <img v-if="e.user.avatar.length < 10"
                                 src="../assets/user.png" 
                                 alt="默认图片">
                            <img v-else
                                 :src="e.user.avatar"
                                 alt="">
                        </div>
                    </div>
                    <div class="info">
                        <div class="name">
                            {{e.user.name}}
                            {{e.user.type === 0 ? "(作者)" : ""}}
                        </div>
                        <div class="comment-detail">
                            {{"@" + e.to_user.name}}
                            {{e.to_user.type === 0 ? '(作者)' : ''}}:{{e.content}}
                        </div>
                        <div class="time">
                            {{e.create_time}}
                        </div>
                    </div>
                    <div class="item-comment"
                         @click="showCommentModal(item._id, item.user, e.user)">
                        <span class="message">回复</span>
                    </div>
                </div>
                
                
            </div>
        </div>
        <Comment :visible="visible"
                 :to_user="to_user"
                 :comment_id="comment_id"
                 :article_id="article_id"
                 @handleOk="handleOk"
                 @cancel="handleCancel" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { timestampToTime } from "../utils/utils";
import Comment from "../components/Comment.vue";
import { ToUser } from "../type/index";

@Component({
    components: {
        Comment
    }
})
export default class CommentList extends  Vue {
    @Prop({ default: [] }) list!: Array<object>;
    @Prop({ default: 0 }) numbers!:number;
    @Prop({ default: "" }) article_id!: string;
    private visible: boolean = false;
    private comment_id: string = "";
    private to_user: ToUser = {
        user_id: "",
        name: "",
        avatar: "",
        type: 0
    };

    private handleCancel():void {
        this.visible = false;
    }

    private handleOk(): void{
        this.visible = false;
        this.$emit("refreshArticle");
    }

    // 添加评论
    private showCommentModal(
        commitId: string,
        user: ToUser,
        secondUser?: ToUser
    ): boolean | void {
        if(!window.sessionStorage.userInfo){
            this.$message({
                message: "登录才能点赞, 请先登录!",
                type: "warning"
            });
            return false;
        }
        // 添加三级评论
        if(secondUser) {
            this.visible = true;
            this.comment_id = commitId;
            this.to_user = user;
        }else {
            // 添加二级评论
            this.visible = true;
            this.comment_id = commitId;
            this.to_user = user;
        }
    }

}

</script>

<style lang="scss" scoped>
    .comment-list {
        margin-top: 30px;
        .top-title {
            padding-bottom: 20px;
            font-size: 18px;
            font-weight: 400;
            border-bottom: 1px solid #E5E9EF;
        }
        .item {
            padding: 15px 0 20px;
            border-bottom: 1px solid #E5E9EF;
            .item-header {
                position: relative;
                padding-left: 45px;
                padding-bottom: 10px;
                .author {
                    position: absolute;
                    left: 0;
                    display: inline-block;

                    .avatar {
                        display: inline-block;
                        margin-right: 5px;
                        width: 40px;
                        height: 40px;
                        vertical-align: middle;
                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }
                }
                .info {
                    display: inline-block;
                    .name {
                        font-size: 12px;
                        color: #6D757A;
                        padding-bottom: 4px 0px;
                    }
                    .time {
                        font-size: 12px;
                        color: #969696;
                    }
                }
                .item-comment {
                    position:absolute;
                    bottom: 7px;
                    left: 210px;

                    .message {
                        display: inline-block;
                        color: #99A2AA;
                        padding: 3px 5px;
                        font-size: 13px;
                        border-radius: 4px;
                    }
                }
                .item-comment :hover {
                    cursor: pointer;
                    background: rgba(153, 162, 170, 0.3);
                    color: #00A1D6;
                }
            }
            .comment-detail {
                min-height: 25px;
                font-size: 14px;
                padding: 2px 0px;
            }
        }
    }

    .item-other {
        margin: 10px 40px;
        border-left: 2px solid #f0f0f0;
        .item-header {
            position: relative;
            padding-left: 45px;
            padding-bottom: 10px;
            .author {
                position:absolute;
                left: 0;
                display: inline-block;
                .avatar {
                    display: inline-block;
                    margin-right: 5px;
                    height: 38px;
                    width: 38px;
                    vertical-align: middle;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            .info {
                display: inline-block;
                .name {
                    font-size: 15px;
                    color: #333;
                }
                .time {
                    font-size: 12px;
                    color: #969696;
                }
                .comment-detail {
                    min-height: 25px;
                    font-size: 14px;
                    padding: 2px 0px;
                    border-bottom: 1p dashed #f0f0f0;
                }
            }
            .item-comment {
                position:absolute;
                bottom: 7px;
                left: 210px;

                .message {
                    display: inline-block;
                    color: #99A2AA;
                    padding: 3px 5px;
                    font-size: 13px;
                    border-radius: 4px;
                }
            }
            .item-comment :hover {
                cursor: pointer;
                background: rgba(153, 162, 170, 0.3);
                color: #00A1D6;
            }
        }
    }
</style>