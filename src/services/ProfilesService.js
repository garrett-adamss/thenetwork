import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
    async getProfileById(id) {
        const res = await api.get(`/api/profiles/${id}`)
        logger.log("Profiles by Id res", res)
        AppState.activeProfile = new Profile(res.data)
    }
}

export const profilesService = new ProfilesService