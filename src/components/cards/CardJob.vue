<script setup lang="ts">
import type { CardJobProps } from "@/types/card-job.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import jobStore from "@/store/job.store"

interface Props {
  type: "default" | "small";
  item: CardJobProps;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "selectItem", id: number): void;
}>();

const selectItem = () => {
  // jobStore.setJobSelected(props.item);
  emit("selectItem", props.item.job.id);
};

const moreDetails = () => {
  //jobStore.setJobSelected(props.item);
  //window.location.href = '/jobs'
}
</script>

<template>
  <Card
    @click="selectItem"
    class="w-[250px] text-left text-sm transition-all hover:bg-accent"
  >
    <CardHeader>
      <CardTitle>{{ props?.item.job?.title }}</CardTitle>
      <CardDescription>{{ props?.item.job?.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex flex-row w-full gap-4 text-gray-500">
        <div>Salario: {{ props?.item.job?.salary }}</div>
        <div>Ubicación: {{ props?.item.job?.place }}</div>
      </div>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6" v-if="$props.type === 'default'">
      <Button 
      @click="moreDetails"
      type="button" variant="default" class="dark:text-white rounded-xl"
        >Ver más</Button
      >
    </CardFooter>
  </Card>
</template>
