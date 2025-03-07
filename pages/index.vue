<template>
  <div class="h-[200vh]">
    <h1 class="text-3xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate at
      repellendus nihil, ducimus incidunt tempora sequi explicabo quae veritatis
      soluta quis debitis quia optio qui repudiandae possimus voluptatibus
      veniam officia!
      {{ groups }}
    </h1>
    <CorePopup v-model:isOpen="showPopup">
      <h2>Welcome to Lil Pop Up Village!</h2>
      <p>This is your popup content.</p>
    </CorePopup>

    <button @click="showPopup = true">Open Popup</button>
  </div>
</template>

<script setup>
const showPopup = ref(false);
const groupStore = useGroupStore();
const { groups } = storeToRefs(groupStore);
onMounted(async () => {
  groupStore.fetchGroups();
});
</script>

<style lang="scss" scoped></style>
