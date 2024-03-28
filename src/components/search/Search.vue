<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const searchValue = ref("");

const searchJob = () => {
  window.location.href = "/jobs";
};

</script>

<template>
  <div class="flex flex-row sm:flex-row w-full text-center content-center justify-between items-center gap-2">
    <div class="flex items-center align-middle text-center flex-grow">
      <Input
        v-model="searchValue"
        id="search"
        type="text"
        placeholder="Buscar empleo..."
        class="pl-10 h-[65px] w-full"
        autocomplete="off"
        autofocus
      />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <div class="flex">
      <Button
        type="submit"
        class="h-[65px] bg-blue-500 hover:bg-blue-600"
        @click="searchJob"
      >
        Buscar
      </Button>
    </div> 
  </div>
</template>
