import client from "@api";

export const logout = async () =>
  await client
    .delete("/auth/logout")
    .then(({ data }) => data)
    .catch((err) => err.response);
