<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      class="mx-auto bg-transparent rounded hover:-translate-y-4
        transition-all duration-500 ease-out transform filter-shadow"
    />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.filter-shadow:hover {
  filter: drop-shadow(15px 20px 10px hsla(0, 0%, 0%, 0.8));
}
</style>
