<template>
  <div>
    <div
      v-for="item in multiLang"
      :key="item.id"
      class="mb-10 flex flex-row gap-x-8 items-center justify-center"
    >
      <div class="bg shadow flex items-center justify-center">
        <img :src="require(`assets/svg/${item.name}.svg`)" alt="" />
      </div>

      {{ item.value }}
      <input
        v-bind="$attrs"
        :type="type"
        :id="item.id"
        :multiLang="item"
        v-model="item.value"
        :placeholder="item.label"
        class="shadow"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    type: String,
    label: String,
    multiLang: Array,
    value: {
      type: null,
    },
  },
  data: () => ({
    innerVal: "",
  }),

  mounted() {
    if (this.value) this.innerVal = this.value;
  },
  watch: {
    value(v) {
      this.innerVal = v;
    },
    innerVal(v) {
      this.$emit("input", v);
    },
  },
};
</script>

<style lang="scss">
span {
  color: #4de7a8;
}
input {
  color: black !important;
  padding: 10px;
  width: 600px;
  height: 60px;
  outline: none;
  background-color: #fefefe;
  border-radius: 5px;
  border: 1px solid #cdfffb45;
}
</style>
