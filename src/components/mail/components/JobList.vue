<script lang="ts" setup>
import Search from "@/components/search/Search.vue";
import { computed, ref, watch, onMounted } from "vue";
import { refDebounced } from "@vueuse/core";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import type { CardJobProps } from "@/types/card-job.type";
import MailList from "@/components/mail/components/MailList.vue";
import MailDisplay from "@/components/mail/components/MailDisplay.vue";
import useJobStore from "@/store/job";

interface JobListProps {
  jobs: CardJobProps[];
  defaultLayout?: number[];
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

const props = withDefaults(defineProps<JobListProps>(), {
  defaultCollapsed: true,
  defaultLayout: () => [270, 755],
});

const isCollapsed = ref(props.defaultCollapsed);
const selectedMail = ref<number | undefined>(props.jobs[0]?.job.id);
const searchValue = ref("");
const debouncedSearch = refDebounced(searchValue, 250);
const jobList = useJobStore().jobList;

onMounted(() => {
  console.log(jobList);
});

const filteredMailList = computed(() => {
  let output: CardJobProps[] = [];
  const searchValue = debouncedSearch.value?.trim();
  if (!searchValue) {
    output = props.jobs;
  }
  return output;
});

const selectedMailData = computed(() =>
  props.jobs.find((item) => item.job.id === selectedMail.value)
);

function onCollapse() {
  isCollapsed.value = true;
}

function onExpand() {
  isCollapsed.value = false;
}

const addApply = () => {};

const addTrash = () => {};

const addBookmark = () => {};

const nextJob = () => {
  const index = props.jobs.findIndex((item) => item.job.id === selectedMail.value);
  selectedMail.value = props.jobs[index + 1].job.id ?? props.jobs[index].job.id;
};

const prevJob = () => {
  const index = props.jobs.findIndex((item) => item.job.id === selectedMail.value);  
  selectedMail.value = props.jobs[index - 1].job.id ?? props.jobs[index].job.id;
};
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full items-stretch"
    >
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[0]" :min-size="20">
        <Tabs default-value="all">
          <TabsContent value="all" class="m-0 pt-4">
            <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
          </TabsContent>
        </Tabs>
      </ResizablePanel>

      <ResizableHandle id="resiz-handle-2" with-handle />

      <ResizablePanel class="pt-4" id="resize-panel-3" :default-size="defaultLayout[1]">
        <MailDisplay
          @add-apply="addApply"
          @add-bookmark="addBookmark"
          @add-trash="addTrash"
          @prev-job="prevJob"
          @next-job="nextJob"
          :item="selectedMailData"
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
