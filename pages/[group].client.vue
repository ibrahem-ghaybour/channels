<template>
  <div class="w-full">
    <Blog />
  </div>
</template>

<script setup>
const blogsStore = useBlogsStore();
const route = useRoute();
onMounted(() => {
  blogsStore.fetchBlogs(route.params.group);
});
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});
onBeforeUnmount(() => {
  blogsStore.clearBlogs();
});
</script>

<style lang="scss" scoped></style>
