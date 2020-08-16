<template>
  <div>
    <h1 class="text-center">Bienvenido Usuario</h1>
    <router-link class="hover:underline text-green-600" :to="{ name: 'roles' }"
      >Roles</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
