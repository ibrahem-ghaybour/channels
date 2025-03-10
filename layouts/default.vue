<script setup></script>

<template>
  <div class="">
    <CoreSidebar />
    <main
      class="w-[calc(100%-theme(spacing.sidebar))] ms-auto relative mt-[50px] !bg-primary !text-primaryText"
    >
      <div class="w-full h-[50px] bg-sidebar fixed top-0 z-40 p-[0.4rem] font-bold flex items-end">
        <span>{{ group?.name }}</span>
      </div>
      <slot />
    </main>
  </div>
</template>
<script setup>
const route = useRoute();
const { getGroupById } = useGroupStore();
const group = computed(() => getGroupById(route.params.group));
</script>

<style scoped></style>
