import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID GGbEa6T72TfhMjIb5gMNzfC_foUCnK1D0DjoJ7_oWdo"
    }
})
