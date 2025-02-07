<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
        <InputText :model-value="bookTitle" @input="emit('update:bookTitle',$event.target.value)"/>
        <Button style="margin:15px" icon="pi pi-check" severity="secondary" rounded @click="emit('saveChanges',bookTitle)"></Button>
        </div>
    </div>
</template>

<script setup>
import {InputText,Button} from 'primevue'
import { defineProps,defineEmits } from 'vue';
defineProps({
    bookTitle:{
        type:String,
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
</script>

<style lang="scss" scoped>

</style>