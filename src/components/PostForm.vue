<template>
  <form @submit.prevent="handleSubmit">
    <p>Create a post</p>
    <input type="text" placeholder="type here" v-model="editable.body" />
    <input type="text" placeholder="your image here" v-model="editable.imgUrl" />
    <button class="btn btn-primary">{{ editable.id ? 'Save' : 'Create' }}</button>
  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})

    watchEffect(()=> {
        if(!AppState.activePost){return}
        editable.value = {...AppState.activePost}
    })

    return {
        editable,
        async handleSubmit(){ 
            try {
                if(editable.value.id){
                    await postsService.editPost(editable.value)
                    Pop.success('ProjectEdited')
                } else {
                    await postsService.createPost(editable.value)
                    
                    Pop.success('You finally created a post')
                }
                editable.value = {}
            } catch (error) {
                logger.error('[creating/edit Post]', error)
                Pop.error("you must log in first", error)
            }
        }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>