<template>

    <div class="card selectable offset-md-1 col-md-8 d-flex  justify-content-around card-body container-fluid">
        <router-link :to="{ name: 'Profile', params: { profileId: profile.id } }">
            <img :src="profile.picture" alt="" :title="profile.name" class="selectable elevation-2">
        </router-link>
    </div>
</template>


<script>
import { Profile } from '../models/Profile.js';

export default {
    props: {
        post: { type: Profile, required: true }
    },
    setup() {
        return {

        }
    }
}
</script>


<style lang="scss" scoped>
</style>