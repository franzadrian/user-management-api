import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // <-- Add "!" to tell TS it'll be initialized by TypeORM

  @Column()
  firstName!: string; // <-- Same here

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  age!: number;

  @Column({ select: false })
  password!: string;
}