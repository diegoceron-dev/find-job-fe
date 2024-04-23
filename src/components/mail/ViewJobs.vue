<script lang="ts" setup>
import { onMounted, ref, watch, onBeforeMount } from "vue";
import JobList from "./components/JobList.vue";
import type { CardJobProps } from "@/types/card-job.type";
import useJobStore from "@/store/job";

const items = ref<CardJobProps[]>([]);

onMounted(() => {
  updateList();
});

const updateList = () => {
  items.value = useJobStore().jobList;
};

watch(() => useJobStore().jobList, updateList);
</script>

<template>
  <div class="flex-col md:flex" v-if="items.length > 0">
    <JobList :jobs="items" :nav-collapsed-size="4" />
  </div>
</template>
