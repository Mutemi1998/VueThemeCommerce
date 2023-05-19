<script>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';
// import comming from './components/Pages/Coming-soon/coming-soon.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <!-- Start .header -->
      <Header />
  <!-- End .header -->
  <!-- Start .main -->
  <router-view></router-view>
  <!-- End .main -->
  <!-- Start footer -->
    <Footer /> 
  <!-- End footer -->
</template>