


<script>
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  data() {
    return {
      products: [],
      categories: [],
      cart: {},
      // Add other entity data variables here if needed
    };
  },

  created() {
    this.getProduct(1); // Replace '1' with the desired product ID
    this.getAllProduct();
    // this.getCart();
    // Call other methods to fetch other entities if needed
  },

  methods: {
    async getProduct(productId) {
      try {
        const response = await apiService.get(`/products/${productId}`);
        this.products = [response.data];
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },

    async getAllProduct() {
      try {
        const response = await apiService.get(`/products`);
        this.products = [response.data];
        console.log(this.products);
        return this.products
      } catch (error) {
        console.log(error);
      }
    },

    async getCategories() {
      try {
        const response = await apiService.get('/categories');
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        console.log(error);
      }
    },

    async getCart() {
      try {
        const response = await apiService.get('/cart');
        this.cart = response.data;
        console.log(this.cart);
      } catch (error) {
        console.log(error);
      }
    },

    // Add other methods to fetch other entities if needed
  },
};
</script>