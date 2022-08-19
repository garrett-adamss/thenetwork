import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

    async getPost() {
        const res = await api.get('/api/posts')
        logger.log("post res.data", res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
        logger.log("POST", AppState.posts)
        logger.log("NEXT PAGE", AppState.nextPage)
        logger.log("PREVIOUS PAGE", AppState.previousPage)
    }
    async createPost(postData){
        const res = await api.post('/api/posts', postData)
        logger.log("creating post", res.data)
        AppState.posts.unshift(new Post(res.data))
    }

    async editPost(postData){
        const res = await api.put(`/api/posts/${postData.id}`, postData)
        const index = AppState.posts.findIndex(p => p.id == postData.id)

        AppState.projects.splice(index, 1, new Post(res.data))
    }

    async deletePost(postId){
        const res = await api.delete(`/api/post/${postId}`)
        AppState.posts = AppState.posts.filter(p => p.id != postId)
    }

}

export const postsService = new PostsService()