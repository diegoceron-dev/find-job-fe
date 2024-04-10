<script lang="ts" setup>
import { Archive, Star, FolderPen, ArrowRight, ArrowLeft } from "lucide-vue-next";
import { computed } from "vue";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { CardJobProps } from "@/types/card-job.type";

interface MailDisplayProps {
  item: CardJobProps | undefined;
}

const props = defineProps<MailDisplayProps>();

const mailFallbackName = computed(() => {
  return props.item?.job.title
    .split(" ")
    .map((chunk) => chunk[0])
    .join("");
});
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-center p-2">
      <div class="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!item">
              <Star class="size-4" />
              <span class="sr-only">Star</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add to favorites</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!item">
              <Archive class="size-4" />
              <span class="sr-only">Move to junk</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to junk</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="default" size="icon" class="text-white" :disabled="!item">
              <FolderPen class="size-4" />
              <span class="sr-only">Apply</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Apply</TooltipContent>
        </Tooltip>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!item">
              <ArrowLeft class="size-4" />
              <span class="sr-only">Prev</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Prev</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="ghost" size="icon" :disabled="!item">
              <ArrowRight class="size-4" />
              <span class="sr-only">Next</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Next</TooltipContent>
        </Tooltip>
      </div>
    </div>
    <Separator />

    <div v-if="item" class="flex flex-1 flex-col">
      <div class="flex items-start p-4">
        <div class="flex items-start gap-4 text-sm">
          <Avatar>
            <AvatarFallback>
              {{ mailFallbackName }}
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
        <!--         <div v-if="mail.date" class="ml-auto text-xs text-muted-foreground">
          {{ format(new Date(mail.date), "PPpp") }}
        </div> -->
      </div>
      <Separator />

      <div class="p-4 text-sm">
        {{ item.job.description }}
      </div>
      <div class="p-4 text-sm">
        <span class="font-medium">Place:</span> {{ item.job.place }}
      </div>
      <div class="p-4 text-sm">
        <span class="font-medium">Salary:</span> {{ item.job.salary }}
      </div>
      <div class="p-4 text-sm">Company: {{ item.company.name }}</div>
      <Separator class="mt-auto" />
    </div>
    <div v-else class="p-8 text-center text-muted-foreground">No message selected</div>
  </div>
</template>
