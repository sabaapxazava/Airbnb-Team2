import { Hotel } from "./hotel.model";

export class reservedHotel {
  public hotelId!: string;
  public startDate!: Date;
  public endDate!: Date;
  public pricePaid!: number;
  public reserveDate!: Date;
  public hotel!:Hotel;
}
