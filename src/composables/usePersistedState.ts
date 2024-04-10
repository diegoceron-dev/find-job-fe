import { onMounted, onUnmounted } from 'vue';
import useJobStore from '@/store/job';

type JobStoreState = ReturnType<typeof useJobStore> extends infer Store ? Store : never;
type PersistedHook<T> = (store: T, key: string) => void;

const usePersistedState: PersistedHook<JobStoreState> = (store, key) => {
  const saveState = () => {
    localStorage.setItem(key, JSON.stringify(useJobStore.getState()));
  };

  const loadState = () => {
    const persistedState = localStorage.getItem(key);
    if (persistedState) {
      useJobStore.setState(JSON.parse(persistedState));
    }
  };

  onMounted(() => {
    loadState();
  });

  onUnmounted(() => {
    saveState();
  });
};

export { usePersistedState };
