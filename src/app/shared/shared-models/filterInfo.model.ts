export class FilterInfo {
  priceRange!: {
    minPrice: number;
    maxPrice: number;
  };
  typeOfPlace!: string[];
  roomsAndBeds!: {
    bedrooms: string;
    beds: string;
    bathrooms: string;
  };
  propertyOfType!: string[];
  amenities!: {
    essentials: string[];
    features: string[];
    location: string[];
    safety: string[];
  };
  hostLanguage!: string[];

  constructor() {
    this.priceRange = {
      minPrice: 0,
      maxPrice: 0,
    };
    this.typeOfPlace = [];
    this.roomsAndBeds = {
      bedrooms: '',
      beds: '',
      bathrooms: '',
    };
    this.propertyOfType = [];
    this.amenities = {
      essentials: [],
      features: [],
      location: [],
      safety: [],
    };
    this.hostLanguage = [];
  }
}
