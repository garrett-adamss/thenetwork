<template>
  <div class="project-card card selectable">
    <div class="card-body">
      <div class="card-title">

        dates
        <!-- <h6 class="text-uppercase text-light">
          {{ project.title }} - {{ new Date(project.createdAt).toLocaleDateString('ar-EG', {
              month: 'short', day:
                'numeric'
            })
          }}
        </h6> -->
        <!-- <p>{{ project.projectImgs.length }}</p> -->


        <!-- <div class="project-creator" v-if="project.creator">
          <router-link :to="{ name: 'Profile', params: { profileId: project.creator.id } }">
            <img :src="project.creator.picture" alt="" :title="project.creator.name" class="selectable elevation-2">
          </router-link>
        </div>

        <div v-if="project.creator.id == account.id">
          <button @click="toggleEdit">Edit</button>
          <ProjectForm v-if="editing" />
        </div> -->

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Post } from '../models/Post.js';

export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        const editing = ref(false)

        return {
            editing,
            posts: computed(()=> AppState.posts),
            account: computed(()=> AppState.account),
            toggleEdit(){
                AppState.activePost = props.post
                this.editing = !this.editing
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.project-card {
  min-height: 300px;
  background-image: v-bind(cover) !important;
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;

  position: relative;
}

.project-creator {
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

