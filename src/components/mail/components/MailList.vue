<script lang="ts" setup>
import { ScrollArea } from "@/components/ui/scroll-area";
import CardJob from "@/components/cards/CardJob.vue";
import type { CardJobProps } from "@/types/card-job.type";

interface MailListProps {
  items: CardJobProps[];
}

defineProps<MailListProps>();
const selectedMail = defineModel<number>("selectedMail", { required: false });

const updateItemSelected = (jobId: number) => {
  selectedMail.value = jobId;
}
</script>

<template>
  <ScrollArea class="h-screen flex">
    <div class="flex-1 flex flex-col gap-2 p-4 pt-0">
      <TransitionGroup name="list" appear>
        <CardJob
          v-for="item of items"
          :item="item"
          :type="'small'"
          class="w-full"
          @select-item="updateItemSelected"
        />
      </TransitionGroup>
    </div>
  </ScrollArea>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.list-leave-active {
  position: absolute;
}
</style>
