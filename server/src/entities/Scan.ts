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
  uri!: string;

  @Field()
  @Column()
  diagnosis!: string;

  @Field({ nullable: true })
  @Column()
  note: string;

  @Field(() => Int)
  @Column()
  doctorId!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.scans, { lazy: true })
  doctor!: User;

  @Field()
  @Column()
  patientId!: number;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.scans, { lazy: true })
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
