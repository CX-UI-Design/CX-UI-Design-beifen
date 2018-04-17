/*
 * Router config for Vue
 * ---------------------------------------------------------------------------------------------------------------------
 */
import NProgress from 'nprogress';          // Progress 进度条
import 'nprogress/nprogress.css';           // Progress 进度条 样式
import router from './routes'


// 全局导航钩子
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  //判断页面是否有登录访问限制
  if (to.meta.requireAuth) {
    next()
  }
  else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default router;





