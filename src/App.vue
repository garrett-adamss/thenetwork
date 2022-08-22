<template>
  <header>
    <Navbar />
  </header>
  
  <body class="container-fluid">
    <div class="row">


      <div class="left-bar text-center col-2 bg-dark">
        <div class="d-flex flex-column align-items-center justify-content-between h-100">
          <Login class="pt-3" />
        </div>
      </div>

      <main class="col-8">
        <router-view />
      </main>



      <div class="right-bar col-2 bg-dark">
        <div v-for="a in ads" :key="a.title">
          <AdsCard :ad="a"  />
        </div>
      </div>

    </div>
  </body>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import { adsService } from './services/AdsService.js';
import { logger } from './utils/Logger.js';
import Pop from './utils/Pop.js';
import AdsCard from './components/AdsCard.vue';

export default {
  name: "App",
  setup() {
    async function getAds() {
      try {
        await adsService.getAds();
      }
      catch (error) {
        logger.error("[getting ads]", error);
        Pop.error(error);
      }
    }
    onMounted(() => {
      getAds();
    });
    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
    };
  },
  components: { AdsCard }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
body{
  overflow-y: hidden;
}

.left-bar {
  height: 93vh;
  // width: 300px;
  overflow-y: hidden;
}

main {
  max-height: 93vh;
  overflow-y: auto;
  padding-bottom: 5rem;

}

.right-bar {
  height: 93vh;
  overflow-y: hidden;
}
</style>
