<template>
<div class="container-fluid">
  <div class="row" >
    <div class='col-md-10 my-3'>
      <PostForm/>
    </div>
    <div v-for="p in posts" :key="p.id">
      <PostCard :post="p"/>
    </div>
  </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';
import PostForm from '../components/PostForm.vue';

export default {
    setup() {
        async function getPost() {
            try {
                await postsService.getPost();
            }
            catch (error) {
                logger.error("getting post", error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getPost();
        });
        return {
            posts: computed(() => AppState.posts)
        };
    },
    components: { PostCard, PostForm }
}

</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
