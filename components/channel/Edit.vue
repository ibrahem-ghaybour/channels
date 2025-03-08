<template>
  <div class="p-5 w-full relative">
    <h2 class="mb-3 text-xl">Overview</h2>

    <fieldset class="">
      <legend class="sr-only">Channel Settings</legend>
      <CoreInput
        class="pb-10"
        v-model="updateDataChannel.name"
        :label="'CHANNEL NAME'"
        aria-label="Channel Name"
      />

      <div class="w-full pt-5 border-t border-t-[#dbdee16f]">
        <label for="channelTopic" class="mb-1 !text-[0.7rem] block"
          >CHANNEL TOPIC</label
        >
        <textarea
          id="channelTopic"
          v-model="updateDataChannel.topic"
          class="w-full"
          rows="3"
          maxlength="1024"
          placeholder="Let everyone know how to use this channel!"
          aria-label="Channel Topic"
        ></textarea>
      </div>
      <div class="w-full pt-6">
        <span class="text-[0.7rem]">SECLECT ICONS</span>
        <CoreSelectIcon @select="select" />
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const porps = defineProps({
  dataChannel: {
    type: Object,
    default: () => {},
  },
});
const updateDataChannel = ref({
  name: "",
  topic: "",
  icon: "",
});
const select = (val) => {
  updateDataChannel.value.icon = val;
};
</script>

<style lang="scss" scoped></style>
