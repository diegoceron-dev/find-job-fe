<script setup lang="ts">
import type { PropType } from "vue";
import { ref, computed, watch, onMounted } from "vue";
import CardCompany from "@/components/cards/CardCompany.vue";
import { Skeleton } from "@/components/ui/skeleton";
import useMobileDetection from "@/composables/useMobileDetection";

interface Company {
  id: number;
  name: string;
}

const items = ref<Company[]>([
  {
    id: 1,
    name: "Company x",
  },
  {
    id: 2,
    name: "Company y",
  },
  {
    id: 3,
    name: "Company z",
  },
  {
    id: 1,
    name: "Company x",
  },
]);

const loading = ref<boolean>(true);

const { isMobile } = useMobileDetection();

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<template>
  <div class="m-4">
    <p class="text-3xl text-gray-600">Mejores empresas</p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
    >
      <template v-if="loading">
        <div v-for="(item, index) in 4" :key="index">
          <div class="p-4 space-y-4 rounded-xl">
            <Skeleton class="h-[125px]" />
            <div class="mt-2 space-y-2">
              <Skeleton class="h-4 w-[250px]" />
              <Skeleton class="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="p-4 space-y-4 rounded-xl" v-for="item in items">
          <CardCompany  :id="item.id"  :name="item.name" class="w-full" />
        </div>
      </template>
    </div>
  </div>
</template>
