<template>
    <div>
    <BooksTable :books="books" @saveChanges="data => $emit('saveChanges',data)" @load-books="$emit('loadBooks')"/>
  </div>
</template>

<script setup>
// import {ref} from 'vue'
import BooksTable from '@/components/BooksTable.vue';
import {defineProps,defineEmits} from 'vue'
defineProps({
  books: {
    type:[Array,Object],
    required:true
  }
})
defineEmits(['loadBooks','saveChanges'])



</script>

<style>

</style>