import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
    async getProfileById(id) {
        const res = await api.get(`/api/profiles/${id}`)
        logger.log("Profiles by Id res", res)
        AppState.activeProfile = new Profile(res.data)
    }
    async changePage(url){
        const res = await api.get(url)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.nextPage = res.data.older
        logger.log('next page', AppState.nextPage)
        AppState.previousPage = res.data.newer
        logger.log('previous page', AppState.previousPage) 
    }
}

export const profilesService = new ProfilesService