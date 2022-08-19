<template>
  <div class="ad-card card selectable">
    <div>
     <h1>{{ads.title}}</h1>
      <img :src="ads.tall" alt="no pic" :title="ads.title">
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Ad } from '../models/Ad.js';

// TODO  draw the stupid ads

export default { 
  setup() {
    return {
      ads: computed(()=> AppState.ads)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>