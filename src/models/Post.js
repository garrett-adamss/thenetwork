export class Post { 
    constructor(data){
        this.id = data.id || ''
        this.body = data.body || ''
        this.imgURL = data.imgURL || ''
        this.creatorId = data.creatorId || ''
        this.likeIds = data.likeIds || ''
    }
}