import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import service from "./utils/https";
import urls from "./utils/urls";


import {
  MenuItem,
  Row,
  Col,
  Button,
  Menu,
  Dropdown,
  Form,
  FormItem,
  Dialog,
  Input,
  Message,
  DropdownMenu,
  DropdownItem,
  Timeline,
  TimelineItem,
  Card,
} from "element-ui";


//按需引用element组件
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Dialog.name, Dialog);
Vue.component(Input.name, Input);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);

Vue.prototype.$message = Message
Vue.config.productionTip = false;


Vue.prototype.$https = service; //其他页面再使用 axios 的时候直接使用this.$https就可以了
Vue.prototype.$urls = urls;     // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
