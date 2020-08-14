<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap p-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img class="w-48" alt="UNSA logo" src="@/assets/logo.png" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-4xl tracking-tight ml-10"
            >Gestion de Procesos de Admisión
          </router-link>
        </div>
      </nav>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #64001d;
}
</style>
