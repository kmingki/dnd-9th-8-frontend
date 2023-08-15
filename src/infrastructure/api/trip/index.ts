import client from "@api/index";

export const getTripInfo = async (id: string) =>
  await client
    .get(`/travels/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.response);
