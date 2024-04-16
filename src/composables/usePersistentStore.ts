import { ref, watch } from 'vue';

const usePersistentStore = (storeName: string, initialState: any) => {
    const storedState = localStorage.getItem(storeName);
    const state = ref(storedState ? JSON.parse(storedState) : initialState);

    watch(state, (newValue) => {
        localStorage.setItem(storeName, JSON.stringify(newValue));
    }, { deep: true });

    return state;
};

export default usePersistentStore;
