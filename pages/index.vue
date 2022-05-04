<template>
  <section class="flex flex-col gap-y-8 items-center justify-start">
    <div class="flex flex-row gap-x-8 items-start justify-center my-10">
      <label class="typo__label">Select Language</label>
      <multiselect
        v-model="value"
        label="name"
        track-by="icon"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      ></multiselect>
    </div>
    <transition name="fade">
      <div
        v-if="value.find((ele) => ele.name)"
        class="form shadow-2xl flex flex-col items-center justify-center"
      >
        <ComponentInputText
          :multiLang="value"
          v-model="options"
        ></ComponentInputText>
        <button type="button">Submit</button>
      </div>
    </transition>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import ComponentInputText from "~/components/ComponentInputText.vue";
export default {
  components: {
    Multiselect,
    ComponentInputText,
  },
  data() {
    return {
      value: [],

      options: [
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
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        icon: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },

  mounted() {},
};
</script>
<style lang="scss">
@import "vue-multiselect/dist/vue-multiselect.min.css";

body {
  margin: 0;
  background-color: rgb(241 245 249);
}

.multiselect__tag {
  background-color: #199d00 !important;
  span {
    color: #fff !important;
  }
}
section {
  height: 100vh;
  width: 100vw;
  padding: 30px;

  label {
    padding-top: 10px;
  }
  .multiselect {
    width: 500px;
    height: 50px;
  }
  .form {
    // border: 1px solid #cfcaca;
    border-radius: 5px;
    background-color: #fff;
    padding: 5rem;
  }
  button {
    width: 400px;
    height: 60px;
    background-color: #199d00;
    color: #fff;
    border-radius: 5px;
    outline: none;
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
  .fade-enter-active {
    animation: bounce-in 0.5s;
  }
  .fade-leave-active {
    animation: bounce-in 0.5s;
  }
  @keyframes bounce-in {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      // transform: translateY(10px);
      opacity: 1;
    }
  }
}
</style>
