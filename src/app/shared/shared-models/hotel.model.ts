export class Hotel {
  'id': 'string';
  'mainImages': string[] = [];
  'name': 'string';
  'description': 'string';
  'rooms': [
    {
      images: ['string'];
      name: 'string';
      bedsCount: 0;
      price: 0;
      personsCount: 0;
      childPolicy: true;
      bathRoomsCount: 0;
    }
  ]=[
    {
      images: ['string'],
      name: 'string',
      bedsCount: 0,
      price: 0,
      personsCount: 0,
      childPolicy: true,
      bathRoomsCount: 0,
    }
  ];
  'categories': [
    {
      id: 'string';
      name: 'string';
      icon: 'string';
    }
  ];
  'address': 'string';
  'country': 'string';
  'city': 'string';
  'starCount': 0;
  'latitude': 0;
  'longitude': 0;
  'placeOffers': ['string'];
  'hostLanguage': 'string';
  'hostInformation': {
    hostName: 'string';
    emailAddress: 'string';
    phoneNumber: 'string';
  };
  'freeCancellationDaysCount': 0;
  'typeOfPlace': 'string';
  'propertyType': 'string';
}
