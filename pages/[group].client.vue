<script setup>
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});

const route = useRoute();
const { fetchBlogs, clearBlogs } = useBlogsStore();

const blogsLyst = ref([]);
onMounted(async () => {
  clearBlogs();
  await fetchBlogs(route.params.group, (val) => {
    blogsLyst.value = val;
  });
});
</script>

<template>
  <div class="w-full">
    <template v-if="blogsLyst.length">
        <Blog v-for="blog in blogsLyst" :key="blog.id" :blog="blog" />
    </template>
    <template v-else>
      <p>No blogs found.</p>
    </template>
  </div>
</template>
