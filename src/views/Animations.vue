<template>
  <div class="about">
    <h1>This is a fun only space!</h1>
    <div>
      <IconfloatingLoader
        class="mx-auto text-green-100 deep-animation"
        style="width: 320px; height: 320px"
      />
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
