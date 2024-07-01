<template>
  <div class="fixed bottom-8 flex w-[calc(100%-50px)] justify-between">
    <RouterLink to="/favorites" class="flex flex-col items-center text-[#A3A3A3]">
      <svg
        width="30"
        height="30"
        viewBox="0 0 17 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.02447 0.463524C8.17415 0.00286853 8.82585 0.00287008 8.97553 0.463525L10.5206 5.21885C10.5876 5.42486 10.7795 5.56434 10.9962 5.56434H15.9962C16.4806 5.56434 16.6819 6.18415 16.2901 6.46885L12.245 9.4078C12.0697 9.53512 11.9964 9.7608 12.0633 9.96681L13.6084 14.7221C13.7581 15.1828 13.2309 15.5659 12.839 15.2812L8.79389 12.3422C8.61865 12.2149 8.38135 12.2149 8.20611 12.3422L4.16099 15.2812C3.76913 15.5659 3.24189 15.1828 3.39157 14.7221L4.93667 9.96681C5.0036 9.7608 4.93027 9.53512 4.75503 9.4078L0.709911 6.46885C0.318054 6.18415 0.519443 5.56434 1.0038 5.56434H6.00385C6.22046 5.56434 6.41244 5.42486 6.47937 5.21885L8.02447 0.463524Z"
        />
      </svg>
      <span class="text-xs">Favorites</span>
    </RouterLink>

    <RouterLink to="/recents" class="flex flex-col items-center text-[#A3A3A3]">
      <svg
        width="30"
        height="30"
        viewBox="0 0 15 15"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
        <path d="M3 8.5H7.5V3" stroke="white" stroke-opacity="0.83" />
      </svg>

      <span class="text-xs">Recents</span>
    </RouterLink>

    <RouterLink to="/contacts" class="flex flex-col items-center text-[#A3A3A3]">
      <svg
        width="30"
        height="30"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" />
        <circle cx="7.5" cy="5.5" r="2.5" fill="currentColor" />
        <path
          d="M13 11.2099C8.6 7.20754 3.83333 9.54226 2 11.2099C2 11.2099 5.4631 14.2002 8.05 13.9894C10.2542 13.8097 13 11.2099 13 11.2099Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>

      <span class="text-xs">Contacts</span>
    </RouterLink>

    <RouterLink to="/" class="flex flex-col items-center text-[#A3A3A3]">
      <svg
        width="25"
        height="30"
        viewBox="0 0 14 14"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" />
        <circle cx="7" cy="2" r="2" />
        <circle cx="12" cy="2" r="2" />
        <circle cx="2" cy="7" r="2" />
        <circle cx="7" cy="7" r="2" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="2" cy="12" r="2" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
      </svg>

      <span class="text-xs">Keypad</span>
    </RouterLink>

    <RouterLink to="/voicemail" class="flex flex-col items-center text-[#A3A3A3]">
      <svg
        width="40"
        height="30"
        viewBox="0 0 22 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <circle cx="5" cy="5" r="4.5" />
        <circle cx="17" cy="5" r="4.5" />
        <path d="M4.5 9.5H18" />
      </svg>

      <span class="text-xs">Voicemail</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
