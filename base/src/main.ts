import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { registerMicroApps } from 'qiankun';


const bootstrap = () => {
  const app = createApp(App)

  // 安装初始化路由
  setupRouter(app)
  setupStore(app)

  app.mount('#app')
}

registerMicroApps([
  {
    name: 'micro',
    entry: '//localhost:9137/',
    container: '#microApp',
    activeRule: '/micro',
    props: {
      // 此处将父应用的 store 传入子应用
      setupStore
    }
  },
]);

// 启动
bootstrap()
