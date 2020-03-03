import axios from 'axios'

// const accessPoint = process.env.REACT_APP_ACCESS_POINT

export const api = axios.create({
  baseURL: 'http://localhost:4000/'
})
