import { onMounted, onUnmounted } from 'vue';
import type { StoreApi } from 'zustand';

// Define el tipo del estado del store
type StoreState<T> = {
  state: T;
  setState: (state: T) => void;
};

// Define el tipo del hook persistente
type PersistedHook<T> = (store: StoreApi<T>, key: string) => void;

const usePersistedState: PersistedHook<any> = (store, key) => {
  const saveState = () => {
    localStorage.setItem(key, JSON.stringify(store.getState()));
  };

  const loadState = () => {
    const persistedState = localStorage.getItem(key);
    if (persistedState) {
      store.setState(JSON.parse(persistedState));
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
