<template>
  <div class="w-full bg-blog rounded-lg p-3 shadow-lg">
    <CoreEditorText />
  </div>
</template>

<script lang="ts" setup>
interface Blog {
  userName: string;
  title: string;
  groupId: string;
  created_at: string;
  updated_at: string;
}
const props = defineProps<Blog>();
</script>

<style lang="scss" scoped></style>
