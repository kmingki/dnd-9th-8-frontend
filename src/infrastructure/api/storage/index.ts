import client from "@api/index";

export const getStorageTravels = async () =>
  await client
    .get("/storage")
    .then(({ data }) => data)
    .catch((err) => err.response);

export const toggleStorageValue = async ({
  travelId,
  memberId,
}: {
  travelId: number;
  memberId: number;
}) =>
  await client
    .post(`/storage/${travelId}?memberId=${memberId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);
