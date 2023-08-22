import client from "..";

// 이메일 인증 메일 요청
export const requestEmailAuth = async () =>
  await client
    .post("/authentication-email")
    .then(({ data }) => data)
    .catch((err) => err.response);

// 이메일 인증
export const emailAuth = async (code: string) =>
  await client
    .post("/email-authentication", { code })
    .then(({ data }) => data)
    .catch((err) => err.response);
