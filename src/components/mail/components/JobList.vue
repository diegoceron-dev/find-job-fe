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
  defaultLayout: () => [265, 440, 655],
});

const isCollapsed = ref(props.defaultCollapsed);
const selectedMail = ref<number | undefined>(props.jobs[0]?.job.id);
const searchValue = ref("");
const debouncedSearch = refDebounced(searchValue, 250);
const jobList = useJobStore.getState().jobList;

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

/* watch(jobStore, (newX) => {
  console.log(`x is ${newX}`);
}); */
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <ResizablePanelGroup
      id="resize-panel-group-1"
      direction="horizontal"
      class="h-full max-h-[1000px] items-stretch"
    >
      <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
        <Tabs default-value="all">
          <Separator />
          <div
            class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <form>
              <div class="relative">
                <Search />
              </div>
            </form>
          </div>
          <TabsContent value="all" class="m-0">
            <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
          </TabsContent>
        </Tabs>
      </ResizablePanel>

      <ResizableHandle id="resiz-handle-2" with-handle />

      <ResizablePanel class="" id="resize-panel-3" :default-size="defaultLayout[2]">
        <MailDisplay :item="selectedMailData" />
      </ResizablePanel>
    </ResizablePanelGroup>
  </TooltipProvider>
</template>
