import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Patient } from "./Patient";
import { User } from "./User";

@ObjectType()
@Entity()
export class Scan extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  eye: string;

  @Field()
  @Column()
  diagnosis!: string;

  @Field()
  @Column()
  note!: string;

  @Field()
  @Column()
  doctor_id!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.scans)
  doctor!: User;

  @Field()
  @Column()
  patient_id!: number;

  @Field()
  @ManyToOne(() => Patient, (patient) => patient.scans)
  patient!: Patient;

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated_at: Date;
}
