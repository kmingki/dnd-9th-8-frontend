import client from "@api/index";

export const getStorageTravels = async (memberId: number) =>
  await client
    .get("/storage", { params: { memberId } })
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
