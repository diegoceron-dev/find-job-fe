<script setup lang="ts">
import "../../styles/globals.css";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import ModeToggle from "@/components/theme/ModeToggle.vue";

const handleClick = () => {
  if (window.location.pathname !== "/login") window.location.href = "/login";
};
</script>
<template>
  <!-- component -->
  <nav
    class="dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-500 bg-gradient-to-r from-blue-500 to-blue-400 border-b border-blue-300 dark:border-slate-500 w-full flex relative justify-between items-center mx-auto px-8 h-20"
  >
    <!-- logo -->
    <div class="inline-flex">
      <a class="_o6689fn" href="/"
        ><img
          src="https://i.ibb.co/1ZZsTcz/Sin-ti-tulo-3-removebg-preview.png"
          alt="logo"
          border="0"
          width="180px"
        />
      </a>
    </div>

    <!-- end logo -->

    <!-- login -->
    <div class="flex-auto">
      <div class="flex justify-end items-center relative">
        <Button variant="secondary" @click="handleClick">
          <Icon
            icon="radix-icons:person"
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="radix-icons:person"
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Login</span>
        </Button>
      </div>
    </div>
    <!-- end login -->

    <div class="ml-2">
      <ModeToggle />
    </div>
  </nav>
</template>
