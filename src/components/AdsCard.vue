<template>
  <div class="ad-card card selectable">
    <div>
     <h1>{{ad.title}}</h1>
      <img :src="ad.tall" alt="UR BAD" :title="ad.title">
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Ad } from '../models/Ad.js';

// TODO  draw the stupid ads

export default { 
  props: {
    ad: {type: Ad, required: true}
  },
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
</style>