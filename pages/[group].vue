<template>
  <div class="text-[blue]"> {{ route.params.group }}</div>
</template>

<script setup>
const props = defineProps({
  group: {
    type: String,
    default: "",
  },
});

const route = useRoute()
useHead({
  title: "Group",
  description: "The design of Wi-Fi is somewhat similar to Discord./group",
});
</script>

<style lang="scss" scoped></style>
