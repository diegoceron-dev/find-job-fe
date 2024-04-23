import { watch, watchEffect, onMounted, onUnmounted  } from "vue";

const usePersistentStore = (storeName: string, state: any) => {
  const saveState = () => {
    localStorage.setItem(storeName, JSON.stringify(localStorage.getState()));
  };

  const loadState = () => {
    const persistedState = localStorage.getItem(storeName);
    if (persistedState) {
      localStorage.setState(JSON.parse(persistedState));
    }
  };

  localStorage.setItem(storeName, JSON.stringify(state));

  watchEffect(() => {
    localStorage.setItem(storeName, JSON.stringify(state));
  });

  watch(
    state,
    (newValue) => {
      localStorage.setItem(storeName, JSON.stringify(newValue));
    },
    { deep: true }
  );

  onMounted(() => {
    loadState();
  });

  onUnmounted(() => {
    saveState();
  });
};

export default usePersistentStore;
