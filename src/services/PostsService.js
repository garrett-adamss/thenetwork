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
    async getPostByCreatorId(creatorId){
        const res = await api.get('/api/posts', {
            params: {
                creatorId
            }
        })
        logger.log('post by creator id RES', res.data)
        AppState.profilePosts = res.data.posts.map(p => new Post(p))
        AppState.nextPage = res.data.older
        AppState.previousPage = res.data.newer
    }

    async createPost(postData){
        const res = await api.post('/api/posts', postData)
        logger.log("creating post", res.data)
        AppState.posts.unshift(new Post(res.data))
    }

    async deletePost(id){
        const res = await api.delete(`/api/posts/${id}`)
        AppState.posts = AppState.posts.filter(p => p.id != id)
    }
    async changePage(url){
        const res = await api.get(url)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.nextPage = res.data.older
        logger.log('next page', AppState.nextPage)
        AppState.previousPage = res.data.newer
        logger.log('previous page', AppState.previousPage) 
    }
    async getPostsBySearch(searchTerm) {
        const res = await api.get('/api/searchPosts', {
            params: {
                query: searchTerm
            }
        })
        logger.log("GET POST BY SEARCH", res.data)
        AppState.posts = res.data.posts.map(p => new Post(p))
    }
    async likePost(id){
        const res = await api.post(`/api/posts/${id}/like`)
        const index = AppState.posts.findIndex(p => p.id == id)
        AppState.posts.splice(index, 1, new Post(res.data))
    }

}

export const postsService = new PostsService()