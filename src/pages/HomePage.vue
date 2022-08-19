<template>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
  <h1 class="p-5">POST HERE</h1>
</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';

export default {
  setup() {



    onMounted(() => {

    })
    return {

    }
  }
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
