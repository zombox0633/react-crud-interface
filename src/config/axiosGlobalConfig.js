import axios from "axios"

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    "X-API-KEY":process.env.REACT_APP_API_KEY
  }
})

export default http
