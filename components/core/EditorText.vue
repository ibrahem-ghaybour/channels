<script setup>
import Quill from "quill";
const emit = defineEmits("edit");
const editor = ref(null); // DOM ref
const quillInstance = ref(null); // Quill instance
const contentHTML = ref(""); // To store the HTML content
const contentDelta = ref(null); // Optional: to store Quill's Delta object

onMounted(() => {
  quillInstance.value = new Quill(editor.value, {
    theme: "snow",
    placeholder: "Start typing...",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["link", "blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
  });

  // Listen to changes
  quillInstance.value.on("text-change", () => {
    // Get the HTML content
    contentHTML.value = quillInstance.value.root.innerHTML;

    // Optionally get the Delta format
    contentDelta.value = quillInstance.value.getContents();

    // For debugging
    console.log("HTML Content:", contentHTML.value);
    console.log("Delta Content:", contentDelta.value);
  });
});

// Later: Send `contentHTML.value` or `contentDelta.value` to your API
</script>

<template>
  <div>
    <div ref="editor" style="height: 300px"></div>

    <!-- Just for demo: show HTML content -->
    <div style="margin-top: 20px">
      <h3>HTML Preview:</h3>
      <div v-html="contentHTML" class="ql-editor"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/editorText.scss";
</style>
