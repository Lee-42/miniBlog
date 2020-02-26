//基础
export interface Meta {
    view: number;
    likes: number;
    comments: number;
}

export interface ToUser {
    user_id: string;
    name: string;
    avatar: string;
    type: number;
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


// 文章详情
export interface OtherComments {
    content: string;
    create_time: string;
    likes: number;
    state: number;
    to_user: ToUser;
    user: ToUser;
    _id: string;
}


export interface Comments {
    article_id: string;
    content: string;
    create_time: string;
    id: number;
    is_handle: number;
    is_top: boolean;
    likes: number;
    other_comments: OtherComments[];
    state: number;
    updata_time: string;
    user: ToUser;
    user_id: string;
    __v: number;
    _id: string;
}

export interface ArticleDetailIF {
    toc: string;
    _id: string;
    author: string;
    category: Array<object>;
    comments: Array<Comment>;
    create_time: string;
    desc: string;
    content: string;
    id: number;
    img_url: string;
    numbers: number;
    keyword: Array<string>;
    like_users:Array<object>;
    meta: Meta;
    origin: number;
    state: number;
    tags: Array<object>;
    title: string;
    update_time: string;
}

export interface ArticleDetailParams {
    id: string | (string | null)[];
    type: number;
}

export interface LikeParams {
    id: string,
    user_id: string
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
