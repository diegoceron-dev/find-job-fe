<script lang="ts" setup>
import { onMounted, ref } from "vue";
import JobList from "./components/JobList.vue";
import type { CardJobProps } from "@/types/card-job.type";

onMounted(() => {

});

const items: CardJobProps[] = []
</script>

<template>
  <div class="flex-col md:flex">
    <JobList :jobs="items" :nav-collapsed-size="4" />
  </div>
</template>
