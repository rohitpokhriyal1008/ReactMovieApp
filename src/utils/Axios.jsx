import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzVlMjE2YzAzNjU4YmI3YjRiNDQyNTNlMjc2ZjIwNCIsInN1YiI6IjY1ZjQ0OTQyMWZhMWM4MDE5NjVjNzM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.429VkKW7Kd3RobzqlhME34zAKdK33qh543Wm2a-EJfc'
      }
})

export default instance