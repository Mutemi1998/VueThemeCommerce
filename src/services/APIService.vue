<template>
    <div>
      <!-- Add your HTML template code here -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
  
    created() {
      this.getData();
    },
  
    methods: {
      async getData() {
        try {
          const response = await axios.get('http://127.0.0.1:8080/api/products/1');
          this.posts = response.data;
          console.log(this.posts); // Display the data in the console
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  