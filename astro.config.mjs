import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
// import localforage from 'localforage';
import tailwind from "@astrojs/tailwind";

/* localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: 'findJob',
  version: 1.0, 
  storeName: 'findJobStore',
}); */

export default defineConfig({
  integrations: [vue(), tailwind({
    applyBaseStyles: false,
  }),]
});