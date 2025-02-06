<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content text-green-200">
            Книга: {{ bookData.volumeInfo?.title }}
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
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}
.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 10px;
}

</style>