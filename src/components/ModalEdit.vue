<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
        <InputText :value="bookTitle" @input="updateTitle"/>
        <Button style="margin:15px" icon="pi pi-check" severity="secondary" rounded @click="saveChanges(props.bookTitle)"></Button>
        </div>
    </div>
</template>

<script setup>
import {InputText,Button} from 'primevue'
import { defineProps,defineEmits } from 'vue';
const props = defineProps({
    bookTitle:{
        type:[String,Object],
    },
    show:{
        type:Boolean,
        default:false
    }
})
const emit = defineEmits(['update:show',"update:bookTitle","saveChanges"])
const hideDialog = () => {
    emit('update:show',false)
}
const updateTitle = (event) => {
    emit('update:bookTitle',event.target.value)
}
const saveChanges = (bookTitle) => {
    emit('saveChanges',bookTitle)
}
</script>

<style lang="scss" scoped>

</style>