import { instance } from "@api/index";

export const getTripInfo = async (id: string) =>
  await instance
    .get(`/travels/${id}`)
    .then(({ data }) => data)
    .catch((err) => err.response);
