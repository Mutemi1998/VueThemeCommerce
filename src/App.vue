<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Product from './components/Pages/Product/product.vue';
import Category from './components/Pages/Category/category-2cols.vue';
import About from './components/Pages/About/about-2.vue';
import comming from './components/Pages/Coming-soon/coming-soon.vue'


</script>

<template>
  <!-- Start .header -->
    <Header />
  <!-- End .header -->
  <!-- Start .main -->
  <router-view />
  <!-- End .main -->
  <!-- Start footer -->
    <Footer />
  <!-- End footer -->
</template>
