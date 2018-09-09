
import Vue from 'vue' ;
import VueRouter from 'vue-router' ;
import SiteContainer from './components/SiteContainer.vue' ;
import SiteNavigation  from './components/SiteNavigation.vue' ;
import ReportsView from './components/ReportsView.vue' ;
import CreateReport from './components/CreateReport.vue' ;
import HomeView  from './components/HomeView.vue' ;

Vue.use(VueRouter) ;

const routes = [
    {
        path: '/',
        component: SiteContainer,
        children:[
            { name:'HomeView', path: '/', component: HomeView },
            { name:'SiteNavigation', path: '/options', component: SiteNavigation },
            { name:'ReportsView', path: '/sighting/reports', component: ReportsView },
            { name:'CreateReport', path: '/sighting/create', component: CreateReport }
        ],
    }
];
const router = new VueRouter({
    routes,
});
let root = new Vue(
    {
        /**
         * Inject router
         */
        router,
        name: 'root',
        el:'#app',
        template:`<router-view></router-view>`,
        created(){
        }
    });