<template>
    <DataTable :value="books" tableStyle="min-width: 50rem">
    <Column field="volumeInfo?.authors" header="Author">
    <template #body="slotProps">
        <span v-for="authors in slotProps.data.volumeInfo?.authors" :key="authors">{{ authors + " " }}</span>
    </template>
    </Column>
    <Column field="volumeInfo.title" header="Title"></Column>
    <Column field="volumeInfo.publishedDate" header="PublishedDate"></Column>
    <Column field="volumeInfo?.categories" header="Categories">
    <template #body="slotProps">
      <span v-for="category in slotProps.data.volumeInfo?.categories" :key="category">{{category}}</span>
    </template>
  </Column>
    <Column class="w-24 !text-end">
      <template #body="{ data }">
            <Button icon="pi pi-search" @click="logModal(data)" severity="secondary" rounded></Button>
        </template>
    </Column>
    <Column class="w-24 !text-end">
      <template #body="{ data }">
            <Button icon="pi pi-pencil" @click="modalEditFunc(data)" severity="secondary" rounded></Button>
        </template>
    </Column>
</DataTable>
  <div>
    <MyModal :bookData="bookData" v-model:show="showModal"/>
    <ModalEdit :book-title="titleText" v-model:show="showModalEdit" @update:bookTitle="titleText = $event" @save-changes="editTilte(titleText)"/>
  </div>
  <Button @click="$emit('loadBooks')">Загрузить еще</Button>
</template> 

<script setup>
import {ref} from 'vue'
import { defineProps,defineEmits } from 'vue';
import { DataTable,Column,Button } from 'primevue';
import MyModal from './MyModal.vue';
import ModalEdit from './ModalEdit.vue';
defineProps({
    books:{
        type:Object,
        required:true
    }
})
defineEmits(['loadBooks'])
const titleText = ref("")
const showModal = ref(false)
const showModalEdit = ref(false)
const bookData = ref({})
const logModal = (data) => {
  bookData.value = data
  showModal.value = true
}
const modalEditFunc = (data) =>{
  showModalEdit.value = true
  titleText.value = data.volumeInfo.title
}
const editTilte = (data) => {
  titleText.value = data
  showModalEdit.value = false
}

</script>

<style lang="scss" scoped>

</style>