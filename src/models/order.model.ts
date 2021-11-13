import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Person} from './person.model';
import {Product} from './product.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @belongsTo(() => Person) //belongto significa: "pertenece a:" Esta propiedad me permite hace una relacion con el modelo Person. "un Orden esta"
  personId: string;

  @hasOne(() => Product)
  product: Product;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
