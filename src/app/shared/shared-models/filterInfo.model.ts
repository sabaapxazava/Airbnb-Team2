export class FilterInfo {
  priceRange!: {
    minPrice: number;
    maxPrice: number;
  };
  typeOfPlace!: string[];
  roomsAndBeds!: {
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  propertyOfType!: string[];
  amenities!: string[];
  hostLanguage!: string[];

  constructor() {
    this.priceRange = {
      minPrice: 0,
      maxPrice: 0,
    };
    this.typeOfPlace = [];
    this.roomsAndBeds = {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    };
    this.propertyOfType = [];
    this.amenities = [];
    this.hostLanguage = [];
  }
}
