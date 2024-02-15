<template>
    <pre>{{ props.left }} -- {{ props.right }} </pre>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ left: number; right: number }>(), {
    left: 1,
    right: 1,
});
</script>
