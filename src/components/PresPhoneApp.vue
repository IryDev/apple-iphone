<template>
  <section id="phone-app" class="common-padding mt-24">
    <div class="screen-max-width">
      <div class="flex flex-col items-center justify-center">
        <h2 class="text-3xl font-medium text-white lg:text-7xl">iOS 17</h2>
        <h2 class="mb-8 text-center text-3xl font-medium text-white lg:text-7xl">
          A new way to contact.
        </h2>
        <h3 class="mb-12 text-center text-xl text-gray-100 lg:text-3xl">
          Keep your content private and secure with the new iOS 17.
        </h3>

        <div class="flex flex-col items-center gap-16 lg:flex-row">
          <PhoneApp />
          <div class="flex max-w-[300px] flex-col gap-6">
            <p class="max-w-[300px] text-2xl text-gray">
              The new iOS 17 is designed to keep your content
              <span class="text-white">private</span> and <span class="text-white"> secure</span>.
            </p>
            <p class="max-w-[300px] text-2xl text-gray">
              With the new
              <span class="text-white">Private Relay</span> feature, your browsing history is kept
              private from ISPs and websites you visit. And with
              <span class="text-white">Hide My Email</span>, you can create unique, random email
              addresses that forward to your personal inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PhoneApp from './PhoneApp.vue'
</script>
