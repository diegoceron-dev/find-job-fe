<script setup lang="ts">
import { ref, onMounted } from "vue";
import CardJob from "@/components/cards/CardJob.vue";
import { Skeleton } from "@/components/ui/skeleton";
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

const loading = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<template>
  <div class="m-4">
    <p class="text-3xl text-gray-600">Últimos añadidos</p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
    >
      <template v-if="loading">
        <div v-for="(item, index) in 4" :key="index">
          <div class="p-4 space-y-4 rounded-xl">
            <Skeleton class="h-[125px]" />
            <div class="mt-2 space-y-2">
              <Skeleton class="h-4 w-[250px]" />
              <Skeleton class="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="p-4 space-y-4 rounded-xl" v-for="item in items">
          <CardJob :item="item" :type="'default'" class="w-full" />
        </div>
      </template>
    </div>
  </div>
</template>
