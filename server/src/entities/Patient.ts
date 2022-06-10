import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Scan } from "./Scan";
import { User } from "./User";

@ObjectType()
@Entity()
export class Patient extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  mrn!: string;

  @Field()
  @Column()
  doctor_id: number;

  @Field()
  @ManyToOne(() => User, (user) => user.patients)
  doctor: User;

  @Field()
  @Column()
  notes: string;

  @Field()
  @OneToMany(() => Scan, (scan) => scan.patient)
  scans: Scan[];

  @Field(() => String)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated_at: Date;
}
