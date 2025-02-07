<template>
  <div>
  <div>
    <MyNavigation/>
  </div>
  <div v-show="!isLoading">
   <RouterView :books="BooksArr" @loadBooks="loadMore()"/>
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
let startIndex = ref(0)
// const searchParam = ref('')

const getBooks = async (searchParam) => {
  try {
    isLoading.value = true
    const response = await axios.get("https://content-books.googleapis.com/books/v1/volumes?langRestrict=eng&maxResults=10",{
      params:{
        startIndex:0,
        q:searchParam
      }
    })
    return BooksArr.value = response.data.items
  }catch(e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }
}
const loadMore = async (searchParam) => {
  startIndex.value = startIndex.value + 1
  try {
    isLoading.value = true
    const response = await axios.get("https://content-books.googleapis.com/books/v1/volumes?langRestrict=eng&maxResults=10&q=harry%20poter",{
      params:{
        startIndex:startIndex.value,
        q:searchParam
      }
    })
    return BooksArr.value.push(...response.data.items)
  }catch(e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }
}
getBooks("Harry Potter")
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
