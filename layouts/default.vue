<script setup></script>

<template>
  <div class="flex">
    <CoreSidebar />
    <main class="flex-1 p-6 font-inter !bg-primary !text-primaryText">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Custom Scrollbar */
</style>
