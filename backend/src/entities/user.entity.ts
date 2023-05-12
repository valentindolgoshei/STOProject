import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar',
  charset: 'cp1251',
  nullable: true,
  })
  login: string;

  @Column({
    unique: true,
    nullable: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column()
  name: string;

  @Column({
    type: "timestamp"
  })
  birthDate: Date;

  @Column({
    type: "int"
  })
  rank: number;

  @Column({
    type: "nvarchar"
  })
  specialization: string;

  @Column({
    type: "int"
  })
  yearsOfExperience: number;

  @Column({
    type: "float"
  })
  salary: number;

  @Column({
    type: "nvarchar"
  })
  education: string;

  @Column({
    type: "nvarchar"
  })
  phoneNumber: string;

  @Column({
    type: "boolean"
  })
  isAdmin: number;
}
