import client from "@api";
import { CreateTripProps } from "@type/createTrip";

export const createTravel = async (travelInfo: CreateTripProps) =>
  await client
    .post("/travels", travelInfo)
    .then(({ data }) => data)
    .catch((err) => err.response);
