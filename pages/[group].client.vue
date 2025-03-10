<script setup>
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});

const route = useRoute();
const { fetchBlogs, clearBlogs } = useBlogsStore();
const isOpenBlog = false
const blogsLyst = ref([]);
onMounted(async () => {
  clearBlogs();
  await fetchBlogs(route.params.group, (val) => {
    blogsLyst.value = val;
  });
});
</script>

<template>
  <div class="w-full !relative h-[200vh]">
    <template v-if="blogsLyst.length">
      <section class="p-4">
        <Blog v-for="blog in blogsLyst" :key="blog.id" :blog="blog" />
      </section>
    </template>
    <template v-else>
      <p>No blogs found.</p>
    </template>
    <div
      class="w-[calc(100%-theme(spacing.sidebar)-30px)] capitalize fixed bottom-0 ms-[15px] p-3 bg-blog h-[50px] rounded-lg"
    >
      Share and enjoy interacting with friends. Always stay in touch 😉.
    </div>
    <CorePopup
    class="popupEditorText"
    v-model:isOpen="isOpenBlog"
  >
    <CoreEditorText
      class="mb-2"
      :textEdit="blog.title"
      @update:edit="updateEdiorText"
    />
    <CoreButton @click="savaChange">save</CoreButton>
  </CorePopup>
  </div>
</template>
