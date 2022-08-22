export class Profile {
    constructor(data){
        this.id = data.id
        this.name = data.name || ""
        this.picture = data.picture || "https://legacycentennialhills.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        this.coverImg = data.coverImg || "https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
        this.graduated = data.graduated || ""
        this.email = data.email || ""
        this.linkedin = data.linkedin || ""
        this.resume = data.resume || ""
        this.github = data.github || ""
        this.bio = data.bio || ""
        this.class = data.class || ""
    }
}