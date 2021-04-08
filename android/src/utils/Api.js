import axios from 'axios';
export const url = 'http://134.122.74.181'
const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
