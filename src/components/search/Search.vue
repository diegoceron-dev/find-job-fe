<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { onMounted, ref, watch } from "vue";
import useJobStore from "@/store/job";
import type { CardJobProps } from "@/types/card-job.type";


const items = ref<CardJobProps[]>([
  {
    company: { id: 1, name: "Company x" },
    job: {
      description:
        "Vacante disponible para desarrollador frontend. ¡Únete a nuestro equipo en Company X y conviértete en un experto en desarrollo frontend! Estamos buscando a alguien apasionado por crear experiencias de usuario sorprendentes y funcionales. En este emocionante rol, tendrás la oportunidad de trabajar en proyectos innovadores, colaborar con un equipo talentoso y contribuir al éxito de nuestros productos digitales. Si te apasiona el diseño web, el desarrollo de aplicaciones y la resolución de problemas creativos, ¡esta oportunidad es para ti!",
      id: 1,
      place: "MX",
      salary: "31000",
      title: "Frontend Developer",
    },
  },
  {
    company: { id: 2, name: "Company y" },
    job: {
      description:
        "Vacante disponible para desarrollador backend. ¿Te apasiona el desarrollo backend y estás buscando un nuevo desafío emocionante? ¡Entonces únete a nosotros en Company Y! Estamos en busca de un desarrollador backend altamente motivado y con experiencia para unirse a nuestro equipo dinámico. En este rol, tendrás la oportunidad de trabajar en proyectos emocionantes, colaborar con un equipo talentoso y contribuir al desarrollo de soluciones innovadoras. Si tienes habilidades sólidas en programación y te encanta resolver problemas complejos, ¡esperamos conocerte!",
      id: 2,
      place: "US",
      salary: "40000",
      title: "Backend Developer",
    },
  },
  {
    company: { id: 3, name: "Company z" },
    job: {
      description:
        "Vacante disponible para diseñador UX/UI. ¿Eres un apasionado del diseño de interfaces de usuario y estás buscando un nuevo desafío emocionante? ¡Entonces esta oportunidad es para ti! En Company Z, estamos en busca de un diseñador UX/UI talentoso y creativo para unirse a nuestro equipo innovador. En este rol, tendrás la oportunidad de diseñar experiencias de usuario atractivas y funcionales, colaborar con equipos multidisciplinarios y contribuir al desarrollo de productos de vanguardia. Si tienes habilidades sólidas en diseño de interfaces de usuario y una pasión por la innovación, ¡esperamos conocerte!",
      id: 3,
      place: "CA",
      salary: "35000",
      title: "UX/UI Designer",
    },
  },
  {
    company: { id: 1, name: "Company x" },
    job: {
      description:
        "Vacante disponible para desarrollador frontend. ¡Únete a nuestro equipo en Company X y conviértete en un experto en desarrollo frontend! Estamos buscando a alguien apasionado por crear experiencias de usuario sorprendentes y funcionales. En este emocionante rol, tendrás la oportunidad de trabajar en proyectos innovadores, colaborar con un equipo talentoso y contribuir al éxito de nuestros productos digitales. Si te apasiona el diseño web, el desarrollo de aplicaciones y la resolución de problemas creativos, ¡esta oportunidad es para ti!",
      id: 1,
      place: "MX",
      salary: "31000",
      title: "Frontend Developer",
    },
  },
]);


onMounted(() => {});

const searchValue = ref("");

const searchJob = () => {
  useJobStore().addJobList(items.value);
  console.log(useJobStore().jobList);
  if (window.location.pathname !== "/jobs") window.location.href = "/jobs";
};
</script>

<template>
  <div
    class="flex flex-row sm:flex-row w-full text-center content-center justify-between items-center gap-2"
  >
    <div class="flex items-center align-middle text-center flex-grow">
      <Input
        v-model="searchValue"
        id="search"
        type="text"
        placeholder="Buscar empleo..."
        class="pl-10 h-[65px] w-full"
        autocomplete="off"
        autofocus
      />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>
    <div class="flex">
      <Button
        @click="searchJob"
        type="button"
        variant="default"
        class="h-[65px] dark:text-white rounded-xl"
      >
        Buscar
      </Button>
    </div>
  </div>
</template>
