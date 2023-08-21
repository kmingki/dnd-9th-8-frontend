import axios from "axios";
import { getCookie, setCookie } from "../../application/utils/cookie";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
console.log(process.env.REACT_APP_BASE_URL);
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
    const accessToken = getCookie("accessToken");
    if (
      response.data.errorCode === "AT-C-0002" ||
      response.data.errorCode === "AT-C-0001"
    ) {
      const originalRequest = config;

      await axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/auth/refresh`,
      })
        .then(({ data }: { data: any }) => {
          setCookie("accessToken", data.data.newAccessToken, 1);
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
