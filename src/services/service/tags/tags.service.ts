//const url = process.env.REACT_APP_URl;
import axios from 'axios'

const url = "http://localhost:3146/api/"



export const createTag = (payload: any) => {
    axios.post(url + 'tags/create', payload,
        { withCredentials: true }).then((res) => {
            console.log(res.data)
            return res.data
        })
}