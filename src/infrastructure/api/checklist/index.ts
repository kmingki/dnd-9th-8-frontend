import client from "@api/index";

export const postNewChecklist = async (travelId: string) =>
  await client
    .post(`travels/${travelId}/check-lists`)
    .then(({ data }) => data)
    .catch((err) => err.response);

export const deleteChecklist = async (travelId: string, checkListId: string) =>
await client
    .delete(`travels/${travelId}/check-lists/${checkListId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);