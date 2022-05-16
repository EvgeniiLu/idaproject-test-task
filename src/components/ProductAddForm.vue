<template>
  <div class="form">
    <div class="form-inner">
      <div class="form-item">
        <div class="title-input">
          <span class="point">Наименование товара</span>
        </div>
        <input
          v-model="form.name"
          @blur="if (form.name === '') errForm.name = true;"
          @keydown="errForm.name = false"
          class="input"
          placeholder="Введите наименование товара"
        />
        <div v-if="errForm.name" class="input-err">
          <span>{{ errMessage.empty }}</span>
        </div>
      </div>
      <div class="form-item">
        <div class="title-input">
          <span>Описание товара</span>
        </div>
        <textarea
          v-model="form.desc"
          class="input-desc"
          placeholder="Введите описание товара"
        />
      </div>
      <div class="form-item">
        <div class="title-input">
          <span class="point">Ссылка на изображение товара</span>
        </div>
        <input
          v-model="form.url"
          @blur="if (form.url === '') errForm.url = true;"
          @keydown="
            errForm.url = false;
            errMessage.url = 'Поле является обязательным';
          "
          class="input"
          placeholder="Введите оссылку"
        />
        <div v-if="errForm.url" class="input-err">
          <span>{{ errMessage.url }}</span>
        </div>
      </div>
      <div class="form-item">
        <div class="title-input">
          <span class="point">Цена товара</span>
        </div>
        <input
          v-model="form.price"
          @blur="if (form.price === '') errForm.price = true;"
          @keydown="
            errForm.price = false;
            errMessage.price = 'Поле является обязательным';
          "
          class="input"
          placeholder="Введите цену"
        />
        <div v-if="errForm.price" class="input-err">
          <span>{{ errMessage.price }}</span>
        </div>
      </div>
      <div class="form-item">
        <button
          class="input-btn-err"
          :class="{ 'input-btn': buttonDisabled === false }"
          :disabled="buttonDisabled"
          @click="sumbitForm"
        >
          Добавить товар
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductAddForm",

  data() {
    return {
      form: {
        name: "",
        desc: "",
        url: "",
        price: "",
      },

      errForm: {
        name: false,
        url: false,
        price: false,
      },

      errMessage: {
        empty: "Поле является обязательным",
        url: "Поле является обязательным",
        price: "Поле является обязательным",
      },
    };
  },

  computed: {
    buttonDisabled() {
      return this.form.name === "" ||
        this.form.url === "" ||
        this.form.price === ""
        ? true
        : false;
    },
  },

  methods: {
    sumbitForm() {
      if (!this.validURL(this.form.url)) {
        this.errMessage.url = "Некорректная ссылка";
        this.errForm.url = true;
      }
      if (!this.validPrice(this.form.price)) {
        this.errMessage.price = "Значение должно быть числом";
        this.errForm.price = true;
      }
      if (!this.errForm.name && !this.errForm.url && !this.errForm.price) {
        this.$emit("formIsValid", this.form);
        this.form = {
          name: "",
          desc: "",
          url: "",
          price: "",
        };
      }
    },

    validURL(url) {
      let pattern = new RegExp(
        "^(https?:\\/\\/)?" +
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
          "((\\d{1,3}\\.){3}\\d{1,3}))" +
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
          "(\\?[;&a-z\\d%_.~+=-]*)?" +
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!pattern.test(url);
    },

    validPrice(price) {
      let number = price.split(" ").join("");
      return Number.isInteger(+number);
    },
  },
};
</script>
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

.form-inner {
  width: 100%;
  border-radius: 4px;
  padding: 24px;
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

      .point {
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
