import { ref, onMounted, onUnmounted } from 'vue';

export default function useMobileDetection() {
  const isMobile = ref(false); // Initialize as false initially

  const checkMobile = () => {
    if (typeof window !== 'undefined') { // Check if window is defined
      isMobile.value = window.innerWidth < 768;
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      checkMobile(); // Call checkMobile initially
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', checkMobile);
    }
  });

  return { isMobile };
}
