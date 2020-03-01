<template>
    <div class="project left">
        <el-row :gutter="20">
            <el-col class="el-col-pointer"
                    :span="isMobileOrPc ? 24 : 12"
                    v-for="(l, index) in list"
                    :key="(l._id)"
                    style="margin-bottom: 20px">
                <a :href="l.url"
                   target="_blank"
                   rel="noopener noreferrer">
                    <el-card shadow="hover">
                        <img :src="l.img" 
                             alt="project"
                             class="image">
                        <div style="padding: 14px;">
                            <h4>{{l.title}}</h4>
                            <div class="content">{{l.content}}</div>
                            <span>
                                {{l.start_time}} ~ 
                            </span>
                            <span>
                                {{l.end_time}}
                            </span>
                        </div>
                    </el-card>
                </a>
            </el-col>
        </el-row>
        <LoadingCustom v-if="isLoading"></LoadingCustom>
        <LoadEnd v-if="isLoading"></LoadEnd>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LoadEnd from "../components/LoadEnd.vue";
import LoadingCustom from "../components/Loading.vue";
import {
    throttle,
    getScrollTop,
    getDocumentHeight,
    getWindowHeight,
    getQueryStringByName,
    timestampToTime,
    isMobileOrPc,
} from "../utils/utils";
import { Params, ProjectList, ProjectsData } from "../type/index";

@Component({
    components: {
        LoadEnd,
        LoadingCustom,
    }
})
export default class Timeline extends Vue {
    private reverse: boolean = true;
    private isLoadEnd: boolean = false;
    private isLoading: boolean = false;
    private isMobileOrPc: boolean = false;
    private list: ProjectList[] = [];
    private total: number = 0;
    private params: Params = {
        keyword: "",
        pageNum: 1,
        pageSize: 10,
    };

    mounted():void {
        this.handleSearch();
        window.onscroll = () => {
            if(getScrollTop() + getWindowHeight() > getDocumentHeight() - 100){
                //如果不是已经没有数据了, 都可以继续滚动加载
                if(this.isLoadEnd === false && this.isLoading === false){
                    this.handleSearch();
                }
            }
        };
    }

    private async handleSearch(): Promise<void> {
        this.isLoading = true;
        const data: ProjectsData = await this.$https.get(this.$urls.getProjectList, {
            params: this.params,
        });
        this.isLoading = false;
        console.log('projectList: ', data.list);
        this.list = [...this.list, ...data.list];
        this.total = data.count++;
        this.params.pageNum++;
        if(this.total === this.list.length){
            this.isLoadEnd = true;
        }
    }
}

</script>

<style lang="scss" scope>
    .project {
        overflow: hidden;
        padding: 40px 0;
        .el-col-pointer {
            cursor: pointer;
        }
        .content {
            height: 70px;
            text-overflow: ellipsis;
        }
        .image {
            width: 100%;
            height: 250px;
        }
    }
</style>





