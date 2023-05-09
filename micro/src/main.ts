import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';


const bootstrap = (props? :any) => {
  const app = createApp(App)

  // 安装初始化路由
  setupRouter(app)
  setupStore(app)

  app.mount(
    (props.container
      ? props.container.querySelector('#app')
      : document.getElementById('app')) as Element
  );
  return app
}

let app: any 
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  // 启动
  bootstrap()
} else {
  renderWithQiankun({
    mount(props) {
      console.log('--mount');
      app = bootstrap(props)

    },
    bootstrap() {
      console.log('--bootstrap');
    },
    update() {
      console.log('--update');
    },
    unmount() {
      console.log('--unmount');
      app?.unmount();
    }
  });
}
