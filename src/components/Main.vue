<script>
import Banner from "./Main/Banner.vue";
import Advertisement from "./Main/Advertisement.vue";
import Recommendation from "./Main/Recommendation.vue";
import Trending from "./Main/Trending.vue";
import Brands from "./Main/Brands.vue";
import Popular from "./Main/Popular.vue";
import Offers from "./Main/Offers.vue";
import TodaysDeals from "./Main/TodaysDeals.vue";
import TodaysDealsOutlet from "./Main/TodaysDealsOutlet.vue";
import Arrivals from "./Main/Arrivals.vue";

export default {
  components: {
    Banner,
    Advertisement,
    Recommendation,
    Trending,
    Brands,
    Popular,
    Offers,
    TodaysDealsOutlet,
    TodaysDeals,
    Arrivals,
  },
};
</script>

<template>
  <main class="main">
    <!-- Start Banner -->
    <Banner />
    <!-- End Banner -->

    <!-- Explore Popular Categories -->
    <Popular />
    <!-- End Explore Popular Categories -->

    <div class="mb-4"></div>
    <!-- End .mb-4 -->

    <!-- Start Offers-->
    <Offers />
    <!-- End Offers-->

    <div class="mb-3"></div>
    <!-- End .mb-5 -->

    <!-- Start new arrivals -->
    <Arrivals />
    <!-- End new arrivals-->

    <div class="mb-6"></div>
    <!-- End .mb-6 -->

    <!--start  todays deal-->
    <TodaysDeals />
    <!--start  todays deal-->

    <!--start  Todays deals & Outlet-->
    <TodaysDealsOutlet />
    <!--start  Todays deals & Outlet-->

    <!--start  Brands-->
    <Brands />
    <!--start  Brands-->

    <!--start  Trending-->
    <Trending />
    <!--End  Trending-->

    <div class="mb-5"></div>
    <!-- End .mb-5 -->

    <!--start  Recommendation-->
    <Recommendation />
    <!--End Recommendation-->

    <div class="mb-4"></div>
    <!-- End .mb-4 -->

    <div class="container">
      <hr class="mb-0" />
    </div>
    <!-- End .container -->

    <!--start  Advertisement-->
    <Advertisement />
    <!--End  Advertisement-->
  </main>
</template>
