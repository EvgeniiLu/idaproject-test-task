<template>
  <div class="product-card">
    <button class="product-delete" @click="deleteProduct">
      <delete-icon />
    </button>
    <div class="product-image">
      <img :src="imgUrl" alt="Упс, ошибочка(" />
    </div>
    <div class="product-info">
      <div class="product-name">
        <span>{{ itemObj.name }}</span>
      </div>
      <div class="product-desc">
        <span>{{ itemObj.desc }}</span>
      </div>
      <div class="product-price">
        <span>{{ mask }}</span> <span>руб.</span>
      </div>
    </div>
  </div>
</template>
<script>
import DeleteIcon from "./DeleteIcon.vue";
import { loadImage } from "../api.js";

export default {
  name: "ProductCard",

  components: {
    DeleteIcon,
  },

  props: {
    itemObj: Object,
  },

  data() {
    return {
      imgUrl: "",
    };
  },

  created: async function () {
    const url = await loadImage(this.itemObj.url);
    if (url) this.imgUrl = url.url;
    else
      this.imgUrl = "https://robohash.org/tot%E2%80%A6ng?size=300x300&set=set1";
  },

  computed: {
    mask() {
      return this.itemObj.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },

  methods: {
    deleteProduct() {
      this.$emit("deleteObj", this.itemObj);
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 332px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &:hover {
    cursor: pointer;

    .product-delete {
      opacity: 0.6;
      transition: opacity 0.2s linear;
    }
  }

  .product-delete {
    position: absolute;
    right: -8px;
    top: -8px;
    display: inline-block;
    width: 32px;
    height: 32px;
    border: none;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    opacity: 0;

    &:hover {
      cursor: pointer;
      transition: 0.2s linear;
      opacity: 1;
    }
  }

  .product-image {
    width: 100%;
    min-width: 332px;
    height: 200px;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .product-info {
    padding: 16px 16px 24px 16px;

    .product-name {
      font-size: 20px;
      font-weight: 600;
      line-height: 25.14px;
      margin-bottom: 16px;
    }

    .product-desc {
      font-size: 16px;
      font-weight: 400;
      line-height: 20.11px;
      margin-bottom: 32px;
      width: 100%;
      height: 80px;
    }

    .product-price {
      font-size: 24px;
      font-weight: 600;
      line-height: 30.17px;
    }
  }
}
</style>
