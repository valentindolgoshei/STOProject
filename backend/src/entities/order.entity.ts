import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  auto: string;

  @Column()
  model: string;

  @Column({
    type: 'timestamp',
  })
  receivedOn: Date;

  @Column({
    type: 'timestamp',
  })
  expectedCompletionOn: Date;

  @Column({
    type: 'float',
  })
  expectedCost: number;

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @Column()
  customer: string;
}
