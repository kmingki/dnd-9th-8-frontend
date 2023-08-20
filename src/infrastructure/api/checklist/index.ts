import client from "@api/index";

export const postNewChecklist = async (travelId: string, title: string) =>
  await client
    .post(`travels/${travelId}/check-lists`, { title : title })
    .then(({ data }) => data)
    .catch((err) => err.response);

export const deleteChecklist = async (travelId: number, checkListId: number) =>
await client
    .delete(`travels/${travelId}/check-lists/${checkListId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

  /* 백엔드 api 개발중 */
export const updateChecklist = async (travelId: number, checkListId: number, title: string) =>
await client
    .patch(`travels/${travelId}/check-lists/${checkListId}`, {title: title})
    .then(({ data }) => data)
    .catch((err) => err.response);
