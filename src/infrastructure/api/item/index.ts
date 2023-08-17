import client from "@api/index";

export const postNewItem = async (travelId: string, checkListId: string) =>
await client
    .post(`travels/${travelId}/check-lists/${checkListId}/items`)
    .then(({ data }) => data)
    .catch((err) => err.response);


// export const patchItem = async (travelId: string, checkListId: string) =>
// await client
//     .patch(`travels/${travelId}/check-lists/${checkListId}/items/order`)
//     .then(({ data }) => data)
//     .catch((err) => err.response);

export const deleteItem = async (travelId: string, checkListId: string, itemId: string) =>
await client
    .delete(`travels/${travelId}/check-lists/${checkListId}/items/${itemId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

export const toggleItemCheck = async (travelId: string, checkListId: string, itemId: string) =>
await client
    .patch(`travels/${travelId}/check-lists/${checkListId}/items/${itemId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);