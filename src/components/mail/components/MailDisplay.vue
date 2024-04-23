<script lang="ts" setup>
import { Archive, Star, FolderPen, ArrowRight, ArrowLeft } from "lucide-vue-next";
import { computed } from "vue";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { CardJobProps } from "@/types/card-job.type";

interface JobDetailDisplayProps {
  item: CardJobProps | undefined;
}

const props = defineProps<JobDetailDisplayProps>();
const emit = defineEmits(["addBookmark", "addApply", "addTrash", "nextJob", "prevJob"]);

const JobDetailFallbackName = computed(() => {
  return props.item?.job.title
    .split(" ")
    .map((chunk) => chunk[0])
    .join("");
});

const addApply = () => {
  emit("addApply");
};

const addTrash = () => {
  emit("addTrash");
};

const addBookmark = () => {
  emit("addBookmark");
};

const nextJob = () => {
  emit("nextJob");
};

const prevJob = () => {
  emit("prevJob");
};
</script>

<template>
  <div class="flex h-full flex-col">
    <div v-if="item" class="flex flex-1 flex-col">
      <div class="flex items-start p-2">
        <div class="flex items-start gap-4 text-sm">
          <Avatar>
            <AvatarFallback>
              {{ JobDetailFallbackName }}
            </AvatarFallback>
          </Avatar>
          <div class="grid gap-1">
            <div class="font-semibold">
              {{ item.job.title }}
            </div>
            <div class="line-clamp-1 text-xs">
              <span class="font-medium">Place:</span> {{ item.job.place }}
            </div>
          </div>
        </div>
      </div>
      <Separator />

      <div class="flex items-center p-2">
        <div class="flex items-center gap-2">
          <form onsubmit="event.preventDefault();">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  variant="ghost"
                  size="icon"
                  :disabled="!item"
                  @click="addBookmark"
                >
                  <Star class="size-4" />
                  <span class="sr-only">Añadir a favoritos</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Añadir a favoritos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!item" @click="addTrash">
                  <Archive class="size-4" />
                  <span class="sr-only">Mover al basurero</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Mover al basurero</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  variant="default"
                  size="icon"
                  class="text-white"
                  :disabled="!item"
                  @click="addApply"
                >
                  <FolderPen class="size-4" />
                  <span class="sr-only">Aplicar</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Aplicar</TooltipContent>
            </Tooltip>
          </form>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <form onsubmit="event.preventDefault();">
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!item" @click="prevJob">
                  <ArrowLeft class="size-4" />
                  <span class="sr-only">Anterior</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Anterior</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" :disabled="!item" @click="nextJob">
                  <ArrowRight class="size-4" />
                  <span class="sr-only">Siguiente</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Siguiente</TooltipContent>
            </Tooltip>
          </form>
        </div>
      </div>

      <Separator />

      <div class="p-8">
        <div class="p-4 text-base text-justify">
          {{ item.job.description }}
        </div>
        <div class="p-4 text-base">
          <span class="font-medium">Place:</span> {{ item.job.place }}
        </div>
        <div class="p-4 text-base">
          <span class="font-medium">Salary:</span> {{ item.job.salary }}
        </div>
        <div class="p-4 text-base">Company: {{ item.company.name }}</div>
      </div>
      <Separator class="mt-auto" />
    </div>

    <div v-else class="p-8 text-center text-muted-foreground">No job selected</div>
  </div>
</template>
