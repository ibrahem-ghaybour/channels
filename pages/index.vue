<template>
  <div class="h-[200vh]">
    <h1 class="text-3xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate at
      repellendus nihil, ducimus incidunt tempora sequi explicabo quae veritatis
      soluta quis debitis quia optio qui repudiandae possimus voluptatibus
      veniam officia!
    </h1>
    <CorePopup v-model:isOpen="showPopup">
      <h2>Welcome to Lil Pop Up Village!</h2>
      <p>This is your popup content.</p>
    </CorePopup>

    <button @click="showPopup = true">Open Popup</button>
  </div>
</template>

<script setup>
const showPopup = ref(false);
useHead({
  title: "Discord ibrahim",
  description: "The design of Wi-Fi is somewhat similar to Discord.",
});
</script>

<style lang="scss" scoped></style>
