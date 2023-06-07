import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autopart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  article: string;

  @Column()
  name: string;

  @Column({
    type: 'timestamp',
  })
  yearOfProduction: Date;

  @Column()
  vehicle: string;

  @Column({
    default: 0
  })
  amount: number;
}
