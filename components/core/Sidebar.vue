<template>
  <aside
    class="w-[theme(spacing.sidebar)] fixed top-0 h-dvh bg-sidebar text-primaryText flex flex-col"
  >
    <!-- Logo -->
    <div class="p-4 text-xl font-bold flex items-center">
      <!-- <img src="/logo.png" alt="Logo" class="h-10 w-10 mr-2" /> -->
      Nuxt Community
    </div>

    <!-- Menu Items -->
    <nav class="flex-1">
      <ul class="px-2">
        <li
          @click.self="console.log('')"
          class="relative group my-1 hover:bg-[#404249] transition duration-200 flex items-center rounded-[5px]"
          v-for="item in groups"
          :key="item.id"
        >
          <NuxtLink :to="`/${item.id}`" class="w-full p-2 rounded-[5px]">
            <span class="mr-3">
              <font-awesome-icon
                :icon="`${item?.icon ? item?.icon : 'comment-dots'}`"
              />
            </span>
            {{ item.name }}
          </NuxtLink>
          <div
            @click="console.log('dslkfj')"
            class="absolute  right-1 opacity-50 transition duration-200 hidden group-hover:block"
          >
            <CoreTooltip :data-tooltip="'Edit Channel'">
              <font-awesome-icon icon="gear" />
            </CoreTooltip>
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { faCommentDots, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCommentDots, faGear);
const groupStore = useGroupStore();
const groups = computed(() => groupStore.groupsArray);
onMounted(async () => {
  groupStore.fetchGroups();
});
</script>

<style lang="scss" scoped></style>
