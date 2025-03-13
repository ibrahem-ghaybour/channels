<template>
  <div class="bg-[#2B2D31] p-8 rounded-md shadow-lg w-full max-w-md">
    <h1 class="text-3xl font-bold text-white text-center mb-2">Welcome Back</h1>
    <p class="text-[#B5BAC1] text-center mb-8">Please sign in to continue</p>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <CoreInput v-model="email" :label="'Email'" />
      <CoreInput v-model="password" :label="'password'" :type-input="'password'" />
      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="rememberMe"
            class="rounded border-none bg-[#1E1F22] text-[#5865F2] focus:ring-[#5865F2]"
          />
          <span class="ml-2 text-sm text-[#B5BAC1]">Remember me</span>
        </label>
        <a href="#" class="text-sm text-[#5865F2] hover:underline">
          Forgot Password?
        </a>
      </div>

      <CoreButton class="w-full !text-center py-2" :color-button="'#5865F2'">
        <p class="text-center">Sign In</p>
      </CoreButton>
    </form>

    <p class="mt-6 text-center text-[#B5BAC1]">
      Don't have an account?
      <NuxtLink to="/signup" class="text-[#5865F2] font-medium hover:underline">
        Sign up
      </NuxtLink>
    </p>
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const handleLogin = () => {
  // Add your login logic here
  console.log("Login attempt:", {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
};
</script>

<style lang="scss" scoped></style>
