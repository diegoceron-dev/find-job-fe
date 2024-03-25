<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

</script>
<template>

  <div class="flex w-full text-center content-center justify-center items-center gap-2">
    <div class="relative items-center align-middle text-center">
    <Input id="search" type="text" placeholder="Buscar empleo..." class="pl-10 w-[500px] h-[60px]" autocomplete="off" autofocus/>
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
    <Button type="submit"   class="h-[60px] bg-slate-400 hover:bg-slate-500">  
      Me siento con suerte
    </Button>
  </div>
</template>
