import axios from "axios";
import { getCookie, setCookie } from "../../application/utils/cookie";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

client.interceptors.request.use((config: any) => {
  const accessToken = getCookie("accessToken");

  !accessToken
    ? (config.headers["Authorization"] = "")
    : (config.headers["Authorization"] = `Bearer ${accessToken}`);
  return config;
});

// app render될 때, interceptor
client.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    const { config, response } = error;

    if (response.data.code === 1503 || response.data.code === 1500) {
      const refreshToken = getCookie("refreshToken");
      const originalRequest = config;

      await axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/auth/refresh`,
        data: {
          refreshToken: refreshToken,
        },
      })
        .then(({ data }: { data: any }) => {
          setCookie("accessToken", data.data.newAccessToken, 1);
          setCookie("refreshToken", data.data.refreshToken, 30);
          originalRequest.headers.Authorization = `Bearer ${data.data.newAccessToken}`;
        })
        .catch((err: any) => {
          console.log("/auth/token err", err);
          return Promise.reject(err);
        });

      return axios(originalRequest);
    }
    // error throw
    throw error;
  }
);

export default client;
