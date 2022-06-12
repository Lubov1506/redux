import axios from 'axios'
import queryString from 'query-string'

const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api'
})
export const createUser = data => httpClient.post('/users', data)
export const getUsers = ({ limit = 5, offset = 0 }) =>{
  const qStr = `/users?${queryString({ limit, offset })}`
  return httpClient.get('/users')}
