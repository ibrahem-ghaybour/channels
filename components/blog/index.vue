<template>
  <div
    class="w-full blogTextVaueEdit group relative bg-blog rounded-lg p-3 my-3 shadow-lg transition-all cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
  >
    <CoreTooltip
      @click="isOpenEdit = true"
      :data-tooltip="'Edit Blog'"
      class="opacity-0 !absolute top-2 end-2 !transition-opacity !duration-300 group-hover:opacity-100"
    >
      <font-awesome-icon icon="gear" />
    </CoreTooltip>
    <div
      v-html="contentHTML"
      ref="textHtml"
      class="ql-editor multiline-truncate !h-[120px]"
    ></div>
    <!-- <CoreEditorText
      class="mb-2"
      :textEdit="title"
      @update:edit="updateEdiorText"
    />
    <CoreButton @click="save = true">save</CoreButton> -->
  </div>
  <CorePopup
    class="popupEditorText"
    v-model:isOpen="isOpenEdit"
    @close="setContents(props.blog.title)"
  >
    <CoreEditorText
      class="mb-2"
      :textEdit="blog.title"
      @update:edit="updateEdiorText"
    />
    <CoreButton @click="savaChange">save</CoreButton>
  </CorePopup>
</template>

<script setup>
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCaretDown);

import Quill from "quill";

const isOpenEdit = ref(false);
const props = defineProps({
  blog: {
    id: String,
    userName: String,
    title: String,
    groupId: String,
    created_at: String,
    updated_at: String,
  },
});

const dataChange = ref({ ...props.blog });
const textHtml = ref(null);
const contentHTML = ref("");
let quill;

const { updateBlog } = useBlogsStore();

const updateEdiorText = (e) => {
  dataChange.value = { ...props.blog, title: e };
};

const savaChange = () => {
  updateBlog(props.blog.id, dataChange.value);
  isOpenEdit.value = false;
};
const setContents = (con) => {
  quill.setContents(con);
  contentHTML.value = quill.root.innerHTML;
};
onMounted(() => {
  quill = new Quill(textHtml.value);
  setContents(props.blog.title);
});

watch(
  () => dataChange.value?.title,
  () => {
    if (!quill) return;
    setContents(dataChange.value.title);
  }
);
</script>

<style lang="scss">
.blogTextVaueEdit {
  @import "@/assets/scss/textSi.scss";
}
.popupEditorText {
  @import "@/assets/scss/editorText.scss";
}
</style>
