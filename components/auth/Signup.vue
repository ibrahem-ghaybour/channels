<template>
  <div class="min-h-screen flex items-center justify-center bg-[#313338] p-4">
    <div class="bg-[#2B2D31] p-8 rounded-md shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-bold text-white text-center mb-2">Create an Account</h1>
      <p class="text-[#B5BAC1] text-center mb-8">Join our community today</p>
      
      <form @submit.prevent="handleSignup" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-[#B5BAC1] mb-2">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
            class="w-full px-4 py-3 rounded-[3px] bg-[#1E1F22] border-none text-white placeholder-[#B5BAC1] focus:ring-1 focus:ring-[#5865F2] outline-none transition-colors"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-[#B5BAC1] mb-2">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full px-4 py-3 rounded-[3px] bg-[#1E1F22] border-none text-white placeholder-[#B5BAC1] focus:ring-1 focus:ring-[#5865F2] outline-none transition-colors"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-[#B5BAC1] mb-2">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full px-4 py-3 rounded-[3px] bg-[#1E1F22] border-none text-white placeholder-[#B5BAC1] focus:ring-1 focus:ring-[#5865F2] outline-none transition-colors"
          />
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-[#B5BAC1] mb-2">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            class="w-full px-4 py-3 rounded-[3px] bg-[#1E1F22] border-none text-white placeholder-[#B5BAC1] focus:ring-1 focus:ring-[#5865F2] outline-none transition-colors"
          />
        </div>

        <div class="flex items-center">
          <input 
            type="checkbox" 
            id="terms"
            v-model="acceptTerms"
            required
            class="rounded border-none bg-[#1E1F22] text-[#5865F2] focus:ring-[#5865F2]"
          />
          <label for="terms" class="ml-2 text-sm text-[#B5BAC1]">
            I agree to the 
            <a href="#" class="text-[#5865F2] hover:underline">Terms of Service</a>
            and
            <a href="#" class="text-[#5865F2] hover:underline">Privacy Policy</a>
          </label>
        </div>

        <button 
          type="submit" 
          class="w-full bg-[#5865F2] text-white py-3 px-4 rounded-[3px] font-medium hover:bg-[#4752C4] focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 focus:ring-offset-[#2B2D31] transition-colors"
        >
          Sign Up
        </button>
      </form>

      <p class="mt-6 text-center text-[#B5BAC1]">
        Already have an account?
        <NuxtLink to="/login" class="text-[#5865F2] font-medium hover:underline">
          Sign in
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)

const handleSignup = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  
  // Add your signup logic here
  console.log('Signup attempt:', {
    username: username.value,
    email: email.value,
    password: password.value,
    acceptTerms: acceptTerms.value
  })
}
</script>
