import client from "@api/index";

export const getStorageTravels = async () =>
  await client
    .get("/storage")
    .then(({ data }) => data)
    .catch((err) => err.response);

export const toggleStorageValue = async ({ travelId }: { travelId: number }) =>
  await client
    .post(`/storage/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);
