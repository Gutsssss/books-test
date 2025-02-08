<template>
  <div>
  <div>
    <MyNavigation :search-input="searchParam" @update:search-input="$event => searchParam = $event" @search="getBooks(searchParam)"/>
  </div>
  <div v-show="!isLoading">
   <RouterView :books="BooksArr" @loadBooks="loadMore(searchParam)" @saveChanges="onSaveChanges"/>
   <div class="observer"></div>
  </div>
  <div class="loader" v-show="isLoading">
  <MyLoader/>
  </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import MyNavigation from './components/MyNavigation.vue';
import {onMounted, ref, watch} from 'vue'
import MyLoader from './components/MyLoader.vue';

let BooksArr = ref([])
let isLoading = ref(false)
let startIndex = ref(0)
let searchParam = ref("Harry Potter")

const onSaveChanges = (data) => {
  const updatedBooksArr = BooksArr.value.map(elem => {
    if (elem.id === data.id) {
      return data; 
    }
    return elem;
  });

  
  BooksArr.value = updatedBooksArr;

  return updatedBooksArr ;
}


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
    const response = await axios.get("https://content-books.googleapis.com/books/v1/volumes?langRestrict=eng&maxResults=10",{
      params:{
        startIndex:startIndex.value,
        q:searchParam
      }
    })
    BooksArr.value =  [...BooksArr.value,...response.data.items]
  }catch(e) {
    console.log(e)
  }
  finally {
    isLoading.value = false
  }
}

watch(searchParam,(newVal) => {
  if (newVal) {
   startIndex.value = 0
  }
})
onMounted(() => {
  getBooks(searchParam.value)
  const observerRef = document.querySelector('.observer')
  const options = {
  rootMargin: "0px",
  threshold: 1.0,
};
const callback = (entries) => {
  if(entries[0].isIntersecting) {
    loadMore(searchParam.value)
  }
};
const observer = new IntersectionObserver(callback, options);
observer.observe(observerRef)
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
