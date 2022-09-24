import axios from "axios";

const getData = async (userId) => {
    try {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)

        return {
            ...user,
            posts: [...posts]
        }
    } catch (error) {
        console.log("bir hata oluştu veya userID yanlış/hiç girilmedi");
    }
}

export default getData