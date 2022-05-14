<template>
  <section class="main-page flex flex-col gap-y-8 items-center justify-start">
    <div class="tabs shadow-xl flex items-center gap-x-10 justify-between">
      <button
        @click="value = 'French'"
        :class="value == 'French' ? 'border' : 'noneBorder'"
      >
        <img :src="icon1" alt="" />
        French
      </button>
      <button
        @click="value = 'Arabic'"
        :class="value == 'Arabic' ? 'border' : 'noneBorder'"
      >
        <img :src="icon2" alt="" />
        Arabic
      </button>
      <button
        @click="value = 'English'"
        :class="value == 'English' ? 'border' : 'noneBorder'"
      >
        <img :src="icon3" alt="" />

        English
      </button>
    </div>
    <div
      class="form"
      v-for="item in languageList"
      :key="item.id"
      :class="item.name == value ? 'showInput' : 'displayInput'"
    >
      <div class="flex items-center gap-x-8 justify-center">
        <div class="bg shadow flex items-center justify-center">
          <img :src="require(`assets/svg/${item.name}.svg`)" alt="" />
        </div>
        <ComponentInputText
          :id="item.id"
          :placeholder="item.label"
          v-model="item.value"
        ></ComponentInputText>
      </div>
    </div>
  </section>
</template>

<script>
import ComponentInputText from "~/components/ComponentInputText.vue";
export default {
  components: {
    ComponentInputText,
  },
  data() {
    return {
      icon1: require("assets/svg/French.svg"),
      icon2: require("assets/svg/Arabic.svg"),
      icon3: require("assets/svg/English.svg"),

      value: "French",
      languageList: [
        {
          languageId: "1", //language English
          value: "", //value input
          label: "enter product name", //English
          icon: "En", //flag input language
          name: "English",
        },
        {
          languageId: "2", //language arabic
          value: "", //value input
          label: "ادخل اسم المنتج", //arabic
          icon: "Ar", //flag input language
          name: "Arabic",
        },
        {
          languageId: "3", //language french
          value: "", //value input
          label: "enter product name in french", //french
          icon: "Fr", //flag input language
          name: "French",
        },
      ],
    };
  },
  methods: {},

  mounted() {},
};
</script>
<style lang="scss">
body {
  margin: 0;
  background-color: rgb(241 245 249);
}
section.main-page {
  height: 100vh;
  width: 100vw;
  padding: 30px;
  .tabs {
    background-color: #fefefe !important;
    min-width: 750px;
    height: 60px;
    padding: 10px 20px;
    button {
      background: none !important;
      color: #199d00;
      outline: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      img {
        width: 30px;
        height: 40px;
      }
      &.border {
        border-bottom: 2px solid #199d00 !important;
      }
      &.noneBorder {
        border: 0 !important;
      }

      height: 60px;
      width: 100px;
    }
  }
  .form {
    &.showInput {
      display: flex !important;
    }
    &.displayInput {
      display: none !important;
    }
  }
  .bg {
    background-color: #fefefe;
    border: 1px solid #cdfffb45;
    width: 80px;
    height: 60px;
    border-radius: 5px;
    img {
      width: 55px;
      height: 50px;
    }
  }
}
</style>
