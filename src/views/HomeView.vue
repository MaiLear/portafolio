<template>
<PrincipalLayout/>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const PrincipalLayout =  defineAsyncComponent(()=> import('@/layouts/PrincipalLayout.vue'));
</script>


<style>
</style>