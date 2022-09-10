import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer MbzY_vkBcwYb01XD1upvYqVH7Cdhkx1C5i3aOgYT4q96PGIVUvsjoM-PYiTCYT3nDp9fIP10g5gxKxOImVHXK5o15z_GuYdovAmUyc-4ae3t1RdjuhQmSHljRs3eYnYx"
  }
})