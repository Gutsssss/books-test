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
        
            <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        
    </template>
        </Menubar>
    </div>
</template>

<script setup>
import { Menubar,InputText } from 'primevue';
import router from '@/router';
</script>
<style>
.card {
    margin: 10px;
}
</style>