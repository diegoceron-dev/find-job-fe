<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Inicio de sesión
          </h1>
          <p class="text-balance text-muted-foreground">
            Introduzca su dirección de correo electrónico para acceder a su cuenta
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
           <!--  <Label for="email">Email</Label> -->
            <Input
              id="email"
              type="email"
              placeholder="tucorreo@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
             <!--  <Label for="password">Password</Label> -->
              <a
                href="/forgot-password"
                class="ml-auto inline-block text-sm underline"
              > Olvide mi contraseña
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full bg-blue-400 hover:bg-blue-500">
            Entrar
          </Button>
          <Button variant="outline" class="w-full">
            Entrar con Google
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          No tiene cuenta?
          <a href="#" class="underline">
            Regístrese
          </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block background">
    </div>
  </div>
</template>

<style>
.background {
  background-color: #F6FAF9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23F6FAF9' width='11' height='11'/%3E%3Crect fill='%23eef8f6' x='10' width='11' height='11'/%3E%3Crect fill='%23e6f6f3' y='10' width='11' height='11'/%3E%3Crect fill='%23def4f1' x='20' width='11' height='11'/%3E%3Crect fill='%23d5f2ee' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23cdf0ed' y='20' width='11' height='11'/%3E%3Crect fill='%23c4eeeb' x='30' width='11' height='11'/%3E%3Crect fill='%23bbecea' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23b1eae9' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23a8e8e8' y='30' width='11' height='11'/%3E%3Crect fill='%239ee5e8' x='40' width='11' height='11'/%3E%3Crect fill='%2393e3e8' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2388e1e8' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%237ddfe8' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2370dce9' y='40' width='11' height='11'/%3E%3Crect fill='%2363dae9' x='50' width='11' height='11'/%3E%3Crect fill='%2353d7ea' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2340d5ec' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2325d2ed' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%2300cfee' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%2300cdf0' y='50' width='11' height='11'/%3E%3Crect fill='%2300caf2' x='60' width='11' height='11'/%3E%3Crect fill='%2300c7f4' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%2300c4f6' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%2300c1f8' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%2300befa' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%2300bbfc' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%2300b8ff' x='70' width='11' height='11'/%3E%3Crect fill='%2300b5ff' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2300b2ff' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%2300afff' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%2300acff' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%2300a9ff' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%2300a5ff' x='80' width='11' height='11'/%3E%3Crect fill='%2300a2ff' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23009eff' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23009bff' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%230097ff' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%230094ff' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%230090ff' x='90' width='11' height='11'/%3E%3Crect fill='%23008cff' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%230088ff' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%230084ff' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%230080ff' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23007cff' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%230078ff' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%230073ff' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23006fff' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23006aff' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%230065ff' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%230060ff' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23005aff' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%230054ff' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23004eff' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%230047ff' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23003fff' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%230037ff' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23002cff' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23001ffb' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%230506F6' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>