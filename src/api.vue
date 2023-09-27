<script>
import axios from "axios";

//const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = 'https://fakestoreapi.com';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

const getProduct = async (productId) => {
  try {
    const response = await apiService.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const response = await apiService.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const response = await apiService.get("/categories");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getCart = async () => {
  try {
    const response = await apiService.get("/carts");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getProduct, getAllProducts, getCategories, getCart };
</script>
