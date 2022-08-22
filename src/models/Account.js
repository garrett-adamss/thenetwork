export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg || ""
    this.graduated = data.graduated || ""
    this.email = data.email || ""
    this.linkedin = data.linkedin || ""
    this.resume = data.resume || ""
    this.github = data.github || ""
    this.bio = data.bio || ""
    this.class = data.class || ""
    // TODO add additional properties if needed
  }
}
