<template>
<section :class="props.class" :style="props.style" :id="props.id">
    <slot></slot>
</section>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    class:{
        type: String
    },
    style:{
        type: String
    },
    id:{
        type: String,
        require: true
    }
})

</script>


<style>
</style>