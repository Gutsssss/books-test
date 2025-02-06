<template>
    <DataTable :value="books" paginator :rows="10" tableStyle="min-width: 50rem">
    <Column field="volumeInfo.authors" header="Author">
    <template #body="slotProps">
        <span v-for="authors in slotProps.data.volumeInfo.authors" :key="authors">{{ authors + " " }}</span>
    </template>
    </Column>
    <Column field="volumeInfo.title" header="Title"></Column>
    <Column field="volumeInfo.publishedDate" header="PublishedDate" ></Column>
    <Column field="volumeInfo.categories" header="Categories">
    <template #body="slotProps">
      <span v-for="category in slotProps.data.volumeInfo.categories" :key="category">{{category}}</span>
    </template>
  </Column>
    <Column class="w-24 !text-end">
      <template #body="{ data }">
            <Button icon="pi pi-search" @click="logModal(data)" severity="secondary" rounded></Button>
        </template>
    </Column>
</DataTable>
  <div>
    <MyModal :bookData="modalValue" v-model:show="showModal"/>
  </div>
</template> 

<script setup>
import {ref} from 'vue'
import { defineProps } from 'vue';
import { DataTable,Column,Button } from 'primevue';
import MyModal from './MyModal.vue';
defineProps({
    books:{
        type:Object,
        required:true
    }
})
const showModal = ref(false)
const modalValue = ref({})
const logModal = (data) => {
  modalValue.value = data
  showModal.value = true
}

</script>

<style lang="scss" scoped>

</style>