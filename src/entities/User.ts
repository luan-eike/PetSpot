import { Phone } from '@/entities/objects/Phone';
import { Email } from '@/entities/objects/Email';
import { Address } from '@/entities/objects/Address';

export class User {
  id: number;
  name: string;
  email: Email;
  phone: Phone;
  birthdate?: Date;
  address?: Address;
  gender?: string;
  age?: number;
  createdDate: Date = new Date();

  constructor(params: {
    id: number;
    name: string;
    email: Email;
    phone: Phone;
    birthdate?: Date;
    address?: Address;
    gender?: string;
    age?: number;
    createdDate?: Date;

  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.phone = params.phone;
    this.birthdate = params.birthdate;
    this.address = params.address;
    this.gender = params.gender;
    this.age = params.age;
    this.createdDate = params.createdDate || new Date();  
    
  }
}
