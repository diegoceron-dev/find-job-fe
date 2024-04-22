import { reactive, watchEffect } from 'vue';
import usePersistentStore from './../composables/usePersistentStore';
import type { CardJobProps } from '@/types/card-job.type';

interface JobStoreState {
  jobList: CardJobProps[];
  jobSelected: CardJobProps | null;
}

interface JobStoreActions {
  addJobList: (jobs: CardJobProps[]) => void;
  removeAllJobs: () => void;
  selectJob: (job: CardJobProps) => void;
  removeJobSelected: () => void;
}

type JobStore = JobStoreState & JobStoreActions;

const initialState: JobStoreState = { jobList: [], jobSelected: null };

const jobStore = reactive<JobStore>({
  ...initialState,
  addJobList(jobs: CardJobProps[]) {
    this.jobList = jobs;
  },
  removeAllJobs() {
    this.jobList = [];
  },
  selectJob(job: CardJobProps) {
    this.jobSelected = job;
  },
  removeJobSelected() {
    this.jobSelected = null;
  },
});

watchEffect(() => {
  usePersistentStore('jobStore', jobStore);
});

const useJobStore = (): JobStore => {
  return jobStore;
};

export default useJobStore;
