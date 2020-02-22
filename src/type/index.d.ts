//基础
export interface Meta {
    view: number;
    likes: number;
    comments: number;
}

//登录
export interface UserInfo {
    _id: string;
    name: string;
    avatar: string | any;
}

export interface RegAndLogParams {
    email: string;
    name: string;
    password: string;
    phone: string;
    desc: string;
}

//导航
export interface NavListItem {
    index: string;
    path:string;
    name:string;
}


//文章列表
export interface ArticlesParams {
    keyword: string;
    likes: string; //是否是热门文章
    state: number; //文章发布状态 => 0草稿, 1已发布, ''代表所有文章
    tag_id: string;
    category_id: string;
    pageNum: number;
    pageSize: number; 
}

export interface List {
    category: string[];
    create_time: string;
    desc: string;
    img_url: string;
    meta: Meta;
    tags: string[];
    title: string;
    _id:string;

}

export interface ArticlesData {
    count: number;
    list: List | any;
}
