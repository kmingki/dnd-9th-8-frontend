export interface CreateTripType {
  tripType?: string;
  tripName?: string;
  tripRange?: TripRangeType;
  checkCount?: string;
  state?: string;
  [key: string]: string | TripRangeType | undefined;
}

export interface TripRangeType {
  start: string;
  end: string;
  [key: string]: string;
}
