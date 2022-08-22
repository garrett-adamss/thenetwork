<template>
    <div class="post-card card selectable offset-md-1 col-md-8 d-flex  justify-content-around card-body container-fluid">
       
                <h6 class="text-uppercase text-dark">
                    {{ new Date(post.createdAt).toLocaleDateString('en-GB', { 
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                     })
                    }}
                </h6>
                <div class=" align-items-center">
                <img class= "post-img" :src="post.imgUrl" alt="" />
                </div>
                <p>{{ post.body }}</p>

                <div class="post-creator" v-if="post.creator">
                <router-link :to="{ name: 'Profile', params: { profileId: post.creator.id } }">
                        <img :src="post.creator.picture" alt="" :title="post.creator.name" class="selectable elevation-2">
                    </router-link>
                </div>
                <div class="row">
                <div class="col-3">
                    <button class="btn btn-success" @click="likePost(post.id)">like</button>
                    {{ post.likes.length }}
                </div>

                <div class="delete-button col-2" v-if="account.id == post.creator.id">
                <button class="btn btn-outline-danger" @click="deletePost(post.id)">Delete</button>
                </div>

                </div>
        
    </div>
</template>


<script>
import { computed, ref } from 'vue';
import { Post } from '../models/Post.js';
import PostForm from './PostForm.vue';
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService";


export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {
            account: computed(() => AppState.account),
            async deletePost(id){
                try {
                     postsService.deletePost(id)
                    logger.log('deleting post')
                } catch (error) {
                    logger.error('deleting post', error)
                    Pop.error(error)
                }
            },
            async likePost(id){
                try {
                    postsService.likePost(id)
                    logger.log('liking post')
                } catch (error) {
                    logger.log("toggle like", error)
                    Pop.error(error)
                }
            }
        }
    },
    components: { PostForm }
}
</script>


<style lang="scss" scoped>
.post-card {
    min-height: 300px;
    background-image: v-bind(cover) !important;
    background-size: cover;
    background-position: center;
    margin-bottom: 3rem;

    position: relative;
}

.post-img{ 
    height: 200px;
}

.post-creator {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    img {
        transition: all .15s linear;
        border-radius: 50px;
        height: 45px;
        width: 45px;
        object-fit: cover;
        object-position: center;

        &:hover {
            transform: translateY(-3px);
        }
    }
}
</style>

