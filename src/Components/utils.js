import axios from "axios";

export const url = 'https://jsonplaceholder.typicode.com/';

export const fetchUsers = async () => {
    return await axios.get(`${url}/users`)
}