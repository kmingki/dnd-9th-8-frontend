import { checkList } from "@type/checkList"

export interface TripType {
    title?: string;
    dDay?: string;
    destinationType?: string;
    startDate?: string;
    endDate?: string;
    checkListDtoList?: checkList[];
}
  

export interface TripListType {
    MyTripList: TripType[];
}