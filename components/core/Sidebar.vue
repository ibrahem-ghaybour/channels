<template>
  <aside class="w-60 h-screen bg-sidebar text-primaryText flex flex-col">
    <!-- Logo -->
    <div class="p-4 text-xl font-bold flex items-center">
      <!-- <img src="/logo.png" alt="Logo" class="h-10 w-10 mr-2" /> -->
      Nuxt Community
    </div>

    <!-- Menu Items -->
    <nav class="flex-1">
      <ul class="px-2">
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink
            :to="item.link"
            class="flex items-center p-2 rounded-[5px] hover:bg-[#404249] transition duration-200"
          >
            <span class="mr-3">
              <Icon :name="item.icon" class="w-5 h-5" />
            </span>
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const menuItems = [
  { name: "Home", icon: "home", link: "/" },
  { name: "Resources", icon: "book-open", link: "/resources" },
  { name: "Showcase", icon: "image", link: "/showcase" },
  { name: "Hiring", icon: "briefcase", link: "/hiring" },
  { name: "Help", icon: "help-circle", link: "/help" },
];
</script>

<style lang="scss" scoped>
aside::-webkit-scrollbar {
  width: 5px;
}
aside::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 10px;
}
</style>
