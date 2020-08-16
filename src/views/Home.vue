<template>
  <div>
    <h1 class="text-center">Bienvenido Usuario</h1>
    <ul>
      <li>
        <router-link class="hover:underline text-green-600" :to="{ name: 'roles' }">Roles</router-link>
      </li>
      <li>
        <router-link class="hover:underline text-green-600" :to="{ name: 'pabellon' }">Pabellon</router-link>
      </li>
      <li>
        <router-link class="hover:underline text-green-600" :to="{ name: 'aulas' }">Aulas</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
