<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { onMounted, ref } from "vue";
import useJobStore from "@/store/job";
import type { CardJobProps } from "@/types/card-job.type";

const items: CardJobProps[] = [
  {
    company: { id: 1, name: "Company x" },
    job: {
      description: "Vacante disponible para desarrollador frontend",
      id: 1,
      place: "MX",
      salary: "31000",
      title: "Frontend Developer",
    },
  },
  {
    company: { id: 2, name: "Company y" },
    job: {
      description: "Vacante disponible para desarrollador backend",
      id: 2,
      place: "US",
      salary: "40000",
      title: "Backend Developer",
    },
  },
  {
    company: { id: 3, name: "Company z" },
    job: {
      description: "Vacante disponible para diseñador UX/UI",
      id: 3,
      place: "CA",
      salary: "35000",
      title: "UX/UI Designer",
    },
  },
  {
    company: { id: 1, name: "Company x" },
    job: {
      description: "Vacante disponible para desarrollador frontend",
      id: 1,
      place: "MX",
      salary: "31000",
      title: "Frontend Developer",
    },
  },
];

onMounted(() => {});

const searchValue = ref("");

const searchJob = () => {
  useJobStore.getState().addJobList(items);
  if (window.location.pathname !== "/jobs") window.location.href = "/jobs";
};
</script>

<template>
  <div
    class="flex flex-row sm:flex-row w-full text-center content-center justify-between items-center gap-2"
  >
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
        @click="searchJob"
        type="button"
        variant="default"
        class="h-[65px] dark:text-white rounded-xl"
      >
        Buscar
      </Button>
    </div>
  </div>
</template>
