<template>
  <div class="about">
    <h1>This is a fun only space!</h1>
    <div>
      <IconfloatingLoader
        class="mx-auto text-green-100 deep-animation"
        style="width: 320px; height: 320px"
      />
    </div>
    <div class="mx-auto mt-64">
      <button id="ripple-button" class="my-surface rounded p-4 bg-green-500">
        Click Me
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconfloatingLoader from "@/components/svg/Iconfloating-loader.vue";

import { MDCRipple } from "@material/ripple/component";

export default defineComponent({
  components: { IconfloatingLoader },
  mounted() {
    const button = document.querySelector("#ripple-button");
    if (button) MDCRipple.attachTo(button);
  },
});
</script>

<style lang="scss" scoped>
@use "./node_modules/@material/ripple";

.my-surface {
  @include ripple.surface;
  @include ripple.radius-bounded;
  @include ripple.states;
}

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
