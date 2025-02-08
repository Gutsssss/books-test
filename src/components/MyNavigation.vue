<template>
    <div class="card">
        <Menubar :model="router.options.routes">
            <template #item="{item}">
                <RouterLink :to="item.path">
                    <span :class="item.icon" />
                    <span style="margin:10px; padding:5px">{{ item.label }}</span>
                </RouterLink>
            </template>
            <template #end>
                <div>
            <InputText :model-value="searchInput" @input="updateSearchInput" placeholder="Search" type="text" class="w-32 sm:w-auto" />
            <Button :style="{'display':(searchInput && searchInput.length < 250) ? '' : 'none'}" style="margin: 10px; padding:0" icon="pi pi-search" @click="$emit('search',searchInput)" severity="secondary" rounded/>
            </div>
        
    </template>
        </Menubar>
    </div>
</template>

<script setup>
import { Menubar,InputText,Button } from 'primevue';
import router from '@/router';
import {defineProps,defineEmits} from 'vue'
defineProps({
    searchInput:{
        type:[String,Number],
    }
})
const emit = defineEmits(['update:searchInput','search'])

const updateSearchInput = (event) => {
    emit('update:searchInput',event.target.value)
}
</script>
<style>
.card {
    margin: 10px;
}
</style>