<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="320"
    height="320"
    viewBox="0 0 320 320"
    :fill="iconColor"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>

    <g class="floating-loader">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
        </filter>
        <filter id="shadow2">
          <feDropShadow
            dx="1"
            dy="1"
            stdDeviation="2.5"
            flood-color="rgba(0, 0, 0, 0.25)"
          />
        </filter>
        <filter id="shadow3">
          <feDropShadow
            dx="-0.8"
            dy="-0.8"
            stdDeviation="0"
            flood-color="pink"
            flood-opacity="0.5"
          />
        </filter>
      </defs>
      <path
        fill-rule="evenodd"
        d="M160 285c69.036 0 125-55.964 125-125S229.036 35 160 35 35 90.964 35 160s55.964 125 125 125zm0-6c65.722 0 119-53.278 119-119 0-65.722-53.278-119-119-119C94.278 41 41 94.278 41 160c0 65.722 53.278 119 119 119z"
        class="ring"
        clip-rule="evenodd"
      />
      <path
        fill-rule="evenodd"
        d="M285 160a124.993 124.993 0 01-36.445 88.222 3 3 0 11-4.406-4.073l-.003-.003C265.68 222.611 279 192.861 279 160a3 3 0 116 0z"
        class="bar"
        clip-rule="evenodd"
      />
      <g class="cloud">
        <path
          d="M190.625 151.833c-2.833-14.375-15.458-25.166-30.625-25.166-12.042 0-22.5 6.833-27.708 16.833C119.75 144.833 110 155.458 110 168.333c0 13.792 11.208 25 25 25h54.167c11.5 0 20.833-9.333 20.833-20.833 0-11-8.542-19.917-19.375-20.667zM189.167 185H135c-9.208 0-16.667-7.458-16.667-16.667 0-8.541 6.375-15.666 14.834-16.541l4.458-.459 2.083-3.958C143.667 139.75 151.417 135 160 135c10.917 0 20.333 7.75 22.458 18.458l1.25 6.25 6.375.459c6.5.416 11.584 5.875 11.584 12.333 0 6.875-5.625 12.5-12.5 12.5zm-45.834-20.833h10.625v12.5h12.084v-12.5h10.625L160 147.5l-16.667 16.667z"
          class="Vector"
          style="filter: url(#shadow2)"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "floating-loader",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped></style>
