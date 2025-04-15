import { User } from '@/entities/User';
import { Email } from '@/entities/objects/Email';
import { Phone } from '@/entities/objects/Phone';
import { Address } from '@/entities/objects/Address';

export const MockUserData: User[] = [
  new User({
    id: 1,
    name: 'Alice Silva',
    email: new Email('alice@email.com'),
    phone: new Phone('11999999999'),
    birthdate: new Date('1990-01-01'),
    address: new Address(
      'Rua das Flores',
      '123',
      'Centro',
      'São Paulo',
      'SP',
      'Brasil'
    ),
    gender: 'feminino',
    age: 34,
    createdDate: new Date()
  }),
  new User({
    id: 2,
    name: 'Bruno Souza',
    email: new Email('bruno@email.com'),
    phone: new Phone('21988888888'),
    birthdate: new Date('1988-05-20'),
    address: new Address(
      'Av. Brasil',
      '456',
      'Jardins',
      'Rio de Janeiro',
      'RJ',
      'Brasil'
    ),
    gender: 'masculino',
    age: 36,
    createdDate: new Date()
  }),
  new User({
    id: 3,
    name: 'Camila Rocha',
    email: new Email('camila@email.com'),
    phone: new Phone('31977777777'),
    birthdate: new Date('1995-03-15'),
    address: new Address(
      'Rua do Sol',
      '789',
      'Savassi',
      'Belo Horizonte',
      'MG',
      'Brasil'
    ),
    gender: 'feminino',
    age: 29,
    createdDate: new Date()
  }),
  new User({
    id: 4,
    name: 'Diego Lima',
    email: new Email('diego@email.com'),
    phone: new Phone('41966666666'),
    birthdate: new Date('1992-07-05'),
    address: new Address(
      'Rua das Palmeiras',
      '321',
      'Batel',
      'Curitiba',
      'PR',
      'Brasil'
    ),
    gender: 'masculino',
    age: 31,
    createdDate: new Date()
  })
];
