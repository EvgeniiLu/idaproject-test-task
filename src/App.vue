<template>
  <product-add-form />
</template>

<script>
import ProductAddForm from "./components/ProductAddForm.vue";

export default {
  name: "App",
  components: {
    ProductAddForm,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:wght@400;600&display=swap");

body {
  margin: 0;

  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #3f3f3f;

  background-color: #e5e5e5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
