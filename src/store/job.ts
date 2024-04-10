import { create, type StoreApi } from 'zustand';
import { usePersistedState } from '@/composables/usePersistedState';
import type { CardJobProps } from '@/types/card-job.type';

interface JobStore {
  jobList: CardJobProps[];
  addJobList: (jobs: CardJobProps[]) => void;
  removeAllJobs: () => void;
  jobSelected: CardJobProps | null;
  selectJob: (job: CardJobProps) => void;
  removeJobSelected: () => void;
}

const useJobStore = create<JobStore>((set) => ({
  /* Job List */
  jobList: [],
  addJobList: (jobs) => set((state) => ({ jobList: jobs })),
  removeAllJobs: () => set(() => ({ jobList: [] })),
  /* Job Selected */
  jobSelected: null,
  selectJob: (job) => set(() => ({ jobSelected: job })),
  removeJobSelected: () => set(() => ({ jobSelected: null })),
}));

usePersistedState(useJobStore, 'useJobStore');

export default useJobStore;
