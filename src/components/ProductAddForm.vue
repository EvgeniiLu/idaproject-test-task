<template>
  <div class="form">
    <h2 class="form-title">Добавление товара</h2>
    <div class="form-inner">
      <div class="form-item">
        <div class="title-input">
          <span>Наименование товара</span>
        </div>
        <input class="input" placeholder="Введите наименование товара" />
        <div class="input-err"><span>Поле является обязательным</span></div>
      </div>
      <div class="form-item">
        <div class="title-input">
          <span>Описание товара</span>
        </div>
        <textarea class="input-desc" placeholder="Введите описание товара" />
      </div>
      <div class="form-item">
        <div class="title-input">
          <span>Ссылка на изображение товара</span>
        </div>
        <input class="input" placeholder="Введите оссылку" />
        <div class="input-err"><span>Поле является обязательным</span></div>
      </div>
      <div class="form-item">
        <div class="title-input">
          <span>Цена товара</span>
        </div>
        <input class="input" placeholder="Введите цену" />
        <div class="input-err"><span>Поле является обязательным</span></div>
      </div>
      <div class="form-item">
        <button class="input-btn-err input-btn">Добавить товар</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
%input-style {
  padding: 11px 16px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

%placeholder-style {
  font-size: 12px;
  line-height: 15.08px;
  color: #b4b4b4;
}

.form {
  display: inline-block;
  width: 100%;
  max-width: 332px;
}

.form-title {
  font-weight: 600;
  color: #3f3f3f;
  font-size: 28px;
  line-height: 35.2px;
}

.form-inner {
  max-width: 332px;
  width: 100%;
  border-radius: 4px;
  padding: 24px;
  margin-top: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);

  .form-item {
    position: relative;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    .title-input {
      font-weight: 400;
      font-size: 10px;
      line-height: 12.57px;
      color: #49485e;
      margin-bottom: 4px;

      span {
        position: relative;

        &:before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 4px;
          background: #ff8484;
          position: absolute;
          left: 100%;
          top: 0;
        }
      }
    }

    .input {
      @extend %input-style;

      &::placeholder {
        @extend %placeholder-style;
      }
    }

    .input-desc {
      @extend %input-style;
      height: 108px;
      resize: none;

      &::placeholder {
        @extend %placeholder-style;
      }
    }

    .input-err {
      margin-top: 4px;
      position: absolute;
      font-size: 8px;
      color: #ff8484;
      line-height: 10.06px;
      font-weight: 400;
    }
  }
}

.input-btn-err {
  display: inline-block;
  width: 100%;
  padding: 11px;
  border-radius: 10px;
  border: none;
  background: #eeeeee;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.52px;
  color: #b4b4b4;
  font-family: "Inter", sans-serif;
}

.input-btn {
  color: #ffffff;
  background: #7bae73;
  opacity: 1;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.1s linear;
  }
}
</style>
