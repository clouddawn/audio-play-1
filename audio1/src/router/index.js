import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {title: "首页"},
    component: () => import("@/views/Home/Home.vue"),
  },
  {
    path: "/Form",
    name: "Form",
    meta: {title: "表单页"},
    component: () => import("@/examples/Form/Form.vue"),
  },
  {
    path: "/ScanCode",
    name: "ScanCode",
    meta: {title: "扫码页"},
    component: () => import("@/examples/ScanCode/ScanCode.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title;
  }
  // 进入页面从顶部开始展示
  // chrome
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;

  next();  //执行进入路由，如果不写就不会进入目标页
});

export default router;
