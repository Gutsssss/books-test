<template>
    <div>
    <BooksTable :books="books"/>
  </div>
</template>

<script setup>
// import {ref} from 'vue'
import BooksTable from '@/components/BooksTable.vue';
import {defineProps} from 'vue'
defineProps({
  books: {
    type:[Array,Object],
    required:true
  }
})



</script>

<style>

</style>