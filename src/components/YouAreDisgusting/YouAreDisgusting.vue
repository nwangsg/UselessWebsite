<template>
  <div class="container">
    <div class="block" v-for="n in 1000" :key="n"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "YouAreDisgusting"
});
</script>
<style scoped>
.container {
  margin-top: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  cursor:url('../../assets/YouAreDisgusting/cursor.png') 25 15, pointer
}
.block {
  margin: 0px;
  height: 50px;
  width: 50px;
  display: inline-block;
  border: none;
  padding: 0px;
}
.block {
  background-image: url("../../assets/YouAreDisgusting/normal.png");
  background-size: contain;
  background-repeat: no-repeat;
}
@media (hover: hover) and (pointer: fine) {
  .block:hover {
    background-image: url("../../assets/YouAreDisgusting/disgusted.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
body {
  overflow: hidden;
  height: 100vh;
}
</style>