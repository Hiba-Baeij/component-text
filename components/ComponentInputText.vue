<template>
  <div>
    {{ innerVal }}
    <input
      v-bind="$attrs"
      :type="type"
      :id="id"
      v-model="innerVal"
      :placeholder="placeholder"
      class="shadow"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    type: String,
    label: String,
    placeholder: String,
    // multiLang: Array,
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
