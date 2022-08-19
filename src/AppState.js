import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Ad.js').Ad[]} */
  ads: [],

  /**@type {import('./models/Post.js').Post[]} */
  posts: [],
  nextPage: null,
  previousPage: null,
  activePost: null,

})
