import axios from 'axios'



const printTitle = (text) => console.log(text)
export const getPost = (postId, fn) => {
    
    //   const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const apiUrl = `http://localhost:8090/api/pack/list`
    axios.get(apiUrl)
        .then((res) => {
            fn(res.data.title)
        console.log(res.data)
        })
}