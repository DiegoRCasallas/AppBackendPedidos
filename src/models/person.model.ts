import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,  //Esta propiedaddice que esto es el Id del objeto
    generated: true, //que será gererado automáticamente
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @hasMany(() => Order) //Una persona tiene muchos pedidos.hasmany: es una relacion de 1 a muchos
  orders: Order[]; //>> order[] << Es una lista que me va contener los pedidos

  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
