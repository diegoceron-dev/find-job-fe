import type { CardJobProps } from '@/types/card-job.type';
import { createStore} from 'zustand';

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

const useJobStore = createStore<JobStore>((set) => ({
  jobList: [],
  addJobList: (jobs) => set((state) => ({ ...state, jobList: jobs })),
  removeAllJobs: () => set((state) => ({ ...state, jobList: [] })),
  jobSelected: null,
  selectJob: (job) => set((state) => ({ ...state, jobSelected: job })),
  removeJobSelected: () => set((state) => ({ ...state, jobSelected: null })),
}));

export default useJobStore;