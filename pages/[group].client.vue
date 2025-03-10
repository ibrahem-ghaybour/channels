<script setup>
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});

const route = useRoute();
const { fetchBlogs, clearBlogs } = useBlogsStore();
const { getGroupById } = useGroupStore();
const isOpenBlog = false;
const blogsLyst = ref([]);
const group = computed(() => getGroupById(route.params.group));
onMounted(async () => {
  clearBlogs();
  await fetchBlogs(route.params.group, (val) => {
    blogsLyst.value = val;
  });
});
</script>

<template>
  <div
    class="w-full groupClient !relative h-screen pt-3 grid grid-cols-8 gap-x-3 !overflow-hidden"
  >
    <!-- Left Column -->
    <section class="col-span-5 !relative flex flex-col h-screen">
      <div
        class="p-2 bg-sidebar flex items-end font-bold w-[calc(100%-8px)] h-[50px] rounded-se-md overflow-hidden"
      >
        {{ group?.name }}
      </div>
      <!-- Scrollable Content Area -->
      <div class="flex-1 overflow-y-auto">
        <template v-if="blogsLyst.length">
          <section
            class="bg-primary w-full min-h-[calc(100vh-50px)] overflow-x-hidden pt-[30px] px-3"
          >
            <Blog v-for="blog in blogsLyst" :key="blog.id" :blog="blog" />
          </section>
        </template>
        <template v-else>
          <p>No blogs found.</p>
        </template>
      </div>

      <!-- Fixed Bottom Bar (inside this column) -->
      <div class="p-2 bg-primary w-[calc(100%-8px)] overflow-hidden">
        <div class="bg-blog w-full h-[50px] capitalize p-3 rounded-lg">
          Share and enjoy interacting with friends. Always stay in touch 😉.
        </div>
      </div>
    </section>

    <!-- Right Column -->
    <section class="bg-primary col-span-3 rounded-s-md overflow-hidden">
      <div
        class="p-2 bg-sidebar flex items-end font-bold w-[calc(100%-8px)] h-[50px] overflow-hidden"
      >
        {{ group?.name }}
      </div>
      <BlogCollapse class="" />
    </section>

    <!-- Popup -->
    <CorePopup class="popupEditorText" v-model:isOpen="isOpenBlog">
      <CoreEditorText
        class="mb-2"
        :textEdit="blog.title"
        @update:edit="updateEdiorText"
      />
      <CoreButton @click="savaChange">save</CoreButton>
    </CorePopup>
  </div>
</template>

<style lang="scss"></style>
