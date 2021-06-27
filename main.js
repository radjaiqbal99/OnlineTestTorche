import {
  start,
  registerApplication
} from 'single-spa';

const apps = [
  {
  name: 'app1',
  app: () => System.import('app1'),
  activeWhen: location => location.pathname.startsWith('/')
  },
  {
  name: 'app2',
  app: () => System.import('app2'),
  activeWhen: location => location.pathname.startsWith('/')
  }
]

Promise.all([
  System.import('single-spa'),
  System.import('vue'),
  System.import('vue-router'),
]).then((modules) => {
  // var singleSpa = modules[0];
  var Vue = modules[1];
  var VueRouter = modules[2];

  Vue.use(VueRouter)

  apps.forEach(app => registerApplication(app));
  start();
});