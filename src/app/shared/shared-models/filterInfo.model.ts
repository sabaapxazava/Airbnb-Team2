export class FilterInfo {
  PriceFrom!: number;
  PriceTo!: number;
  Amenities!: string[];
  TypeOfPlace!: string[];
  RoomsCount: number;
  BedsPerRoomCount: number;
  BathRoomsCount: number;
  propertyOfType!: string;
  HostLanguage!: string[];

  constructor() {
    this.PriceFrom = 0;
    this.PriceTo = 0;
    this.Amenities = [];
    this.TypeOfPlace = [];
    this.RoomsCount = 0;
    this.BedsPerRoomCount = 0;
    this.BathRoomsCount = 0;
    this.propertyOfType = '';
    this.HostLanguage = [];
  }
}
