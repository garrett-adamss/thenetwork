<template>
    <div class="post-card card selectable">
        <div class="card-body">
            <div class="card-title">

                <h6 class="text-uppercase text-light">
                    {{ post.createdAt }}
                    {{ new Date(post.createdAt).toLocaleDateString('ar-EG', {
                            month: 'short', day:
                                'numeric'
                        })
                    }}
                </h6>
                <img :src="post.imgUrl" alt="none"/>
                <p>{{ post.body }}</p>



            </div>
        </div>
    </div>
</template>


<script>
import { computed, ref } from 'vue';
import { Post } from '../models/Post.js';
import PostForm from './PostForm.vue';

export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {
            account: computed(() => AppState.account),

        };
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

