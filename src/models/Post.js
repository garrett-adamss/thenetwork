export class Post { 
    constructor(data){
        this.id = data.id || ''
        this.body = data.body || ''
        this.imgUrl = data.imgUrl || 'https://legacycentennialhills.com/wp-content/uploads/2015/07/No-Image-Available1.png'
        this.creatorId = data.creatorId || ''
        this.creator = data.creator || {}
        this.likeIds = data.likeIds || '',
        this.likes = data.likes || '',
        this.createdAt = data.createdAt
    }
}