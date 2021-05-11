<template>
  <button id="pill" v-on:click="onClick">
    <a class="link" v-bind:href="link">
    <h3 class="head">{{label}}<span class="price">{{price}}</span></h3>
    </a>
  </button>
</template>
<script>
import '../stories/style.css'

export default {
  name: 'Pill',
  props:{
      label: 
      {
      type: String,
      required: true,
      },
      price:
      {
      type: String,
      required: true,
      },
      link:
      {
        type: String,
        required: true
      }
  },

  methods:{
    onClick()
    {
      this.$emit("onClick");
      return this.link;
    }
  }
}
</script>