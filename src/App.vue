<template>
  <div class="container">
    <header class="header">
      <div class="header-inner">
        <h2 class="form-title">Добавление товара</h2>
        <select class="select" v-model="selectedValue">
          <option value="" disabled>Выберите значение</option>
          <option value="name">По наименованию</option>
          <option value="min">Сначала недорогие</option>
          <option value="max">Сначала дорогие</option>
        </select>
      </div>
    </header>

    <div class="content">
      <aside class="aside">
        <product-add-form class="form" @formIsValid="addProduct" />
      </aside>

      <main class="main">
        <template v-if="productObj.length">
          <div class="card" v-for="item in productObj" :key="item.time">
            <product-card :itemObj="item" @deleteObj="deleteProduct" />
          </div>
        </template>
        <template v-else>
          <div class="empty">Товаров нет</div>
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import ProductAddForm from "./components/ProductAddForm.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",

  components: {
    ProductAddForm,
    ProductCard,
  },

  mounted: function () {
    if (localStorage.length) {
      for (let i = 0; i < localStorage.length; i++) {
        this.productObj.unshift(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
        this.productObj.sort((a, b) => b.time - a.time);
      }
    }
  },

  data() {
    return {
      productObj: [],
      selectedValue: "",
    };
  },

  watch: {
    selectedValue() {
      if (this.selectedValue === "name")
        this.productObj.sort((a, b) => a.name.localeCompare(b.name));
      if (this.selectedValue === "min")
        this.productObj.sort((a, b) => +a.price - +b.price);
      if (this.selectedValue === "max")
        this.productObj.sort((a, b) => b.price - +a.price);
    },
  },

  methods: {
    addProduct({ name, desc, url, price }) {
      const product = { name, desc, url, price };
      product.time = Date.now();
      this.productObj.unshift(product);
      localStorage.setItem(`${product.time}`, JSON.stringify(product));
      this.selectedValue = "";
    },

    deleteProduct(obj) {
      this.productObj = this.productObj.filter((value) => value !== obj);
      localStorage.removeItem(obj.time);
    },
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

  background: rgba(255, 254, 251, 0.8);
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

.container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 32px;
  width: 100%;
}

.header {
  width: 100%;
  padding-bottom: 16px;

  .header-inner {
    display: flex;
    justify-content: space-between;

    .form-title {
      font-weight: 600;
      color: #3f3f3f;
      font-size: 28px;
      line-height: 35.2px;
    }

    .select {
      font-size: 12px;
      font-weight: 400;
      line-height: 15.08px;
      height: 36px;
      color: #b4b4b4;
      border: none;
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding-left: 16px;
    }
  }
}

.content {
  display: flex;
  flex-direction: row;

  .aside {
    width: 100%;
    max-width: 332px;

    .form {
      position: sticky;
      top: 24px;
    }
  }

  .main {
    width: 100%;
    max-width: 1044px;

    .card {
      display: inline-block;
      margin-left: 16px;
      margin-bottom: 16px;
    }

    .empty {
      font-size: 50px;
      font-weight: 600;
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
