<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface Company {
  id: number;
  name: string;
}

const props = defineProps<Company>();
</script>

<template>  
  <Card class="w-[250px] text-center text-sm transition-all hover:bg-accent justify-center align-middle">
    <CardHeader>
      <CardTitle>{{ props?.name.toUpperCase() }}</CardTitle>
    </CardHeader>
  </Card>
</template>
