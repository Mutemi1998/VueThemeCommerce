import { createRouter, createWebHistory } from "vue-router";
import Main from './components/Main.vue';
import Product from "./components/Pages/Product/product.vue";
import Category from './components/Pages/Category/category-2cols.vue';
import About from './components/Pages/About/about-2.vue';
import Login from './components/Pages/Account/login.vue';
import Blog from './components/Pages/Blog/blog.vue';
import Cart from './components/Pages/Cart/cart.vue';
import Checkout from './components/Pages/Checkout/checkout.vue';
import Contact from './components/Pages/Contact/contact.vue';
import Faq from './components/Pages/Faq/faq.vue';
import NotFound from './components/Pages/NotFound/404.vue';
import Wishlist from './components/Pages/Wishlist/wishlist.vue';
import Profile from  './components/Pages/Account/dashboard.vue';
import api from './api.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
    },
    {
      path: "/category",
      name: "Category",
      component: Category,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq,
    },
    {
      path: "/404",
      name: "Error",
      component: NotFound,
    },
    {
      path: "/wishlist",
      name: "Wishlist",
      component: Wishlist,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
});

export default router;