import axios from "axios";


const token = localStorage.getItem("token");

const instance = axios.create({
    baseURL: 'http://jira.naftazco.ir:3005/api',
    headers: {
        authorization: `Bearer ${token}`,
      },
})

export default instance