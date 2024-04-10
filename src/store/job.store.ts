import { reactive } from 'vue';
import type { CardJobProps } from "@/types/card-job.type";

interface Store {
    jobSelected: CardJobProps | null;
    setJobSelected: (job: CardJobProps | null) => void; 
}

const jobStore = reactive<Store>({
    jobSelected: null,
    setJobSelected(job) {
        this.jobSelected = job;
    }
});

export default jobStore;