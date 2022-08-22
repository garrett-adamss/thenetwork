<template>
  <div class="profile-page" v-if="profile">

    <div class="cover-img text-dark">
      <div class="p-3" style="right:0" v-if="profile.id == account.id">
        <router-link class="btn square btn-warning " :to="{ name: 'Account' }">Edit Account</router-link>
      </div>
      <div class="row">
        <div class="col-md-3">
          <img :src="profile.picture" alt="" height="120">
        </div>
        <div class="col-md-5 offset-md-3">
          <a :href="profile.github">
            <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="45" />
          </a>
          <a :href="profile.linkedin">
            <img alt="logo" src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png" height="45" />
          </a>
          <a :href="profile.resume">
            <img alt="logo" src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-9.png" height="45" />
          </a>
        </div>
      </div>
      <h3>{{ profile.name }}</h3>
      <p>{{ profile.bio }}</p>
    </div>
    
      <div class="col-md-10 row col-offset-1">
        <button class="col-md-5" :disabled="!previousPage" @click="changePage(previousPage)">previous</button>
        <button class="col-md-5" :disabled="!nextPage" @click="changePage(nextPage)">next</button>
      </div>
    <div class="container">
      <div class="row">
        <div class="mx-auto my-3 col-md-10" v-for="p in posts" :key="p.id">
          <PostCard :post="p" />
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    loading...
  </div>
</template>


<script>
import { computed, onMounted}from 'vue';
import { useRoute } from 'vue-router';
import { router } from '../router.js';
import { AppState } from '../AppState.js';
import { profilesService } from '../services/ProfilesService.js';
import { logger } from '../utils/Logger.js';

import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';

export default {
  setup() {

    const route = useRoute()

    async function getPostByCreatorId() {
      try {
        await postsService.getPostByCreatorId(route.params.profileId)
      } catch (error) {
        logger.error('[get post by creator id]', error)
        Pop.error(error)
      }
    }

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId)
      } catch (error) {
        logger.log("[getting profile ]", error)
        Pop.error(error)
        router.push({ name: 'Home' })
      }
    }


    onMounted(() => {
      getProfileById()
      getPostByCreatorId()
    })

    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.profilePosts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      cover: computed(() => `url(${AppState.activeProfile?.coverImg || 'https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg'})`),

      


      async changePage(url) {
        try {
          logger.log("URL", url)
          await profilesService.changePage(url)
        } catch (error) {
          logger.error("changing page", error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  height: 300px;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  place-content: center;
  color: aliceblue;
  background-image: v-bind(cover);
}
</style>