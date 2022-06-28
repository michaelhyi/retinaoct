import { Field, Int, ObjectType } from "type-graphql";
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
  url!: string;

  @Field()
  @Column()
  diagnosis!: string;

  @Field()
  @Column()
  note!: string;

  @Field(() => Int)
  @Column()
  doctorId!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.scans)
  doctor!: User;

  @Field()
  @Column()
  patientId!: number;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.scans)
  patient!: Patient;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  updatedAtString: string;
}
