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
}
