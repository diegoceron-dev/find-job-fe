import { ref, watch, watchEffect } from 'vue';

const usePersistentStore = (storeName: string, state: any) => {
    localStorage.setItem(storeName, JSON.stringify(state));

    watchEffect(() => {
        localStorage.setItem(storeName, JSON.stringify(state));
    });

    watch(state, (newValue) => {
        localStorage.setItem(storeName, JSON.stringify(newValue));
    }, { deep: true });
};

export default usePersistentStore;
