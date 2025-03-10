<script setup>
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});

const route = useRoute();
const { fetchBlogs, clearBlogs } = useBlogsStore();
const { getGroupById } = useGroupStore();
const group = computed(() => getGroupById(route.params.group));
const isOpenBlog = false;
const blogsList = ref([]);
const showCollapse = ref(false);
const idBlog = ref("");
const showCollapsBlog = (id) => {
  showCollapse.value = true;
  idBlog.value = id;
};
onMounted(async () => {
  clearBlogs();
  await fetchBlogs(route.params.group, (val) => {
    blogsList.value = val;
  });
});
</script>

<template>
  <div
    class="w-full groupClient !relative h-screen pt-3 grid grid-cols-8 gap-x-3 !overflow-hidden"
  >
    <section
      :class="[
        '!relative flex flex-col h-screen',
        showCollapse ? 'col-span-5' : 'col-span-8',
      ]"
    >
      <div
        class="p-2 bg-sidebar flex items-end font-bold w-[calc(100%-8px)] h-[50px] rounded-se-md overflow-hidden"
      >
        {{ group?.name }}
      </div>
      <div class="flex-1 overflow-y-auto">
        <template v-if="blogsList.length">
          <section
            class="bg-primary w-full h-[calc(100vh-50px)] overflow-x-hidden pt-[30px] px-3"
          >
          <!-- <section
  class="bg-primary w-full h-[calc(100vh-50px)] overflow-y-auto overflow-x-hidden pt-[30px] px-3"
>
 -->
            <div
              v-for="blog in blogsList"
              :key="blog.id"
              @click="showCollapsBlog(blog.id)"
            >
              <Blog :blog="blog" />
            </div>
            <!--  -->
          </section>
        </template>
        <template v-else>
          <p>No blogs found.</p>
        </template>
      </div>
      <div class="p-2 bg-primary w-[calc(100%-8px)] overflow-hidden">
        <div class="bg-blog w-full h-[50px] capitalize p-3 rounded-lg">
          Share and enjoy interacting with friends. Always stay in touch 😉.{{
            showCollapse
          }}
        </div>
      </div>
    </section>
    <CoreCollapse
      @close="showCollapse = false"
      :class="[
        showCollapse
          ? 'bg-primary col-span-3 rounded-s-md overflow-hidden'
          : '',
      ]"
      ><template #header> {{ group?.name }}{{ showCollapse }} </template>
      <div>
        <BlogCollapse class="" />
      </div>
    </CoreCollapse>
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
