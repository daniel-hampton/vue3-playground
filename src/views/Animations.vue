<template>
  <div class="about mb-64">
    <h1>This is a fun only space!</h1>
    <div>
      <IconfloatingLoader
        class="mx-auto text-green-100 deep-animation"
        style="width: 320px; height: 320px"
      />
    </div>
    <div class="mt-32">
      <div class="text-2xl">Ripple Button. My Nemesis.</div>
      <div class="flex justify-around mt-4 max-w-2xl mx-auto">
        <button
          v-ripple="{class: 'text-green-300'}"
          class="p-4 uppercase font-bold bg-gray-100 rounded-xl text-green-300 shadow focus:outline-none overflow-hidden"
        >
          Let's Go!
        </button>
        <button
          v-ripple
          class="p-4 text-white uppercase font-bold bg-blue-500 rounded-xl shadow focus:outline-none"
        >
          Let's Go!
        </button>
        <button
          v-ripple
          class="p-4 text-white uppercase font-bold bg-gray-900 rounded-xl shadow focus:outline-none"
        >
          In Black?
        </button>
        <button
          class="p-4 text-white uppercase font-bold bg-yellow-500 rounded-xl shadow focus:outline-none"
        >
          Center Ripple
        </button>
      </div>
    </div>
    <div
      v-ripple
      class="mt-32">
      <button
        class="p-4 text-white font-bold uppercase bg-green-500 rounded
        hover:shadow-xl transform hover:-translate-y-1 all
        duration-100"
      >
        Hover Me
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconfloatingLoader from "@/components/svg/Iconfloating-loader.vue";

export default defineComponent({
  components: { IconfloatingLoader },
});
</script>

<style lang="scss" scoped>
@keyframes hover {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes colorChange {
  0% {
    fill: #69d1a9;
  }
  50% {
    fill: #60a5fa;
  }
  100% {
    fill: #a78bfa;
  }
}

.deep-animation {
  & ::v-deep(.cloud) {
    @apply text-green-500;
    animation: hover 2s ease-in-out infinite,
      colorChange 2s linear infinite alternate;
  }

  & ::v-deep(.bar) {
    transform-origin: 50% 50%;
    @apply animate-spin text-green-500;
  }

  &:hover ::v-deep(.bar) {
    animation-play-state: paused;
  }
}
</style>
