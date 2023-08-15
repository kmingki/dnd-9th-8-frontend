import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://ec2-43-202-138-50.ap-northeast-2.compute.amazonaws.com:8798/api",
    withCredentials: true,
});
