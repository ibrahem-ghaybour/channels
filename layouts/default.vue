<script setup></script>

<template>
  <div class="">
    <CoreSidebar />
    <main
      class="w-[calc(100%-theme(spacing.sidebar))] ms-auto p-6 !bg-primary !text-primaryText"
    >
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>
