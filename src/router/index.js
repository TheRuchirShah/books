import Vue from 'vue';
import Router from 'vue-router';

import ListView from '../pages/ListView';
import FormView from '../pages/FormView';
import PrintView from '../pages/PrintView';

Vue.use(Router);

const routes = [
  {
    path: '/list/:doctype',
    name: 'ListView',
    component: ListView,
    props: true
  },
  {
    path: '/edit/:doctype/:name',
    name: 'FormView',
    component: FormView,
    props: true
  },
  {
    path: '/print/:doctype/:name',
    name: 'PrintView',
    component: PrintView,
    props: true
  }
];

export default new Router({ routes });
