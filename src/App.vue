<template>
  <div>
  <div>
    <MyNavigation/>
  </div>
  <div v-show="!isLoading">
   <RouterView :books="BooksArr"/>
  </div>
  <div v-show="isLoading">
  <MyLoader/>
  </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import MyNavigation from './components/MyNavigation.vue';
import {ref} from 'vue'
import MyLoader from './components/MyLoader.vue';

let BooksArr = ref([])
let isLoading = ref(false)

const getBooks = async () => {
  try {
    isLoading.value = true
    const response = await axios.get("https://content-books.googleapis.com/books/v1/volumes?langRestrict=eng&maxResults=40&q=harry%20poter")
    return BooksArr.value = response.data.items
  }catch(e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }
}
getBooks()
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
