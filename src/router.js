import { createWebHashHistory } from "vue";
import Category from './components/Pages/Category/category-2cols.vue';

const routes =[
    { path: '/category', component: Category}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})