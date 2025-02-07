<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <p><strong>Книга: </strong>{{ bookData.volumeInfo?.title }}</p>
            <p v-for="author in bookData.volumeInfo?.authors" :key="author"><strong>Автор:</strong>{{ author }}</p>
            <p v-for="category in bookData.volumeInfo?.categories" :key="category"><strong>Категория:</strong>{{ category }}</p>
            <p v-if="bookData.volumeInfo?.publishedDate"><strong>Дата публикации: </strong>{{ bookData.volumeInfo?.publishedDate }}</p>
            <p v-if="bookData.volumeInfo?.description"><strong>Описание: </strong>{{ bookData.volumeInfo?.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';
defineProps({
    bookData:{
        type:Object,
        required:true
    },
    show:{
        type:Boolean,
        default:false
    }
})
const emit = defineEmits(['update:show'])
const hideDialog = () => {
    emit('update:show',false)
}
</script>

<style scoped>

</style>