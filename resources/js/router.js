import Vue from 'vue'
import Router from 'vue-router'
import products from './components/products/productsTable'
import main from './components/main'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: main,
            children: [
                {
                    path: '/',
                    name: 'default',
                    component: products,
                    props: true,
                },
                {
                    path: 'products',
                    name: 'products',
                    component: products,
                    props: true,
                },
            ]
        },
    ]
})
