<template>
  <div class="product-card">
    <button class="product-delete"></button>
    <div class="product-image">
      <img src="../assets/img/Rectangle.png" alt="Упс, ошибочка(" />
    </div>
    <div class="product-info">
      <div class="product-name"><span>Наименование товара</span></div>
      <div class="product-desc">
        <span>
          Довольно-таки интересное описание товара в несколько строк.
          Довольно-таки интересное описание товара в несколько строк
        </span>
      </div>
      <div class="product-price"><span>10 000</span><span>руб.</span></div>
    </div>
  </div>
</template>
<script>
export default {};
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
      opacity: 1;
      transition: opacity 0.1s linear;
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
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    &:hover {
      cursor: pointer;
      transition: opacity 0.1s linear;
      opacity: 0.75;
    }
  }

  .product-image {
    width: 100%;
    max-width: 332px;
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
    }
    .product-price {
      font-size: 24px;
      font-weight: 600;
      line-height: 30.17px;
    }
  }
}
</style>
