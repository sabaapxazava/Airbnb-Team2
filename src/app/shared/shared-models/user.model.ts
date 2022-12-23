import { creditCard } from "./creditCard.model";

export class User {
  id!: string;
  fullName!:string;
  email!: string;
  phoneNumber!: string;
  gender!: string;
  verifiedUser!: boolean;
  creditCards!: creditCard[];
  reservedHotels!:string[];
  wishlist!:string[]
}