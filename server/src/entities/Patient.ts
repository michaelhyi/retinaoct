import { Field, Int, ObjectType } from "type-graphql";
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

  @Field(() => Int)
  @Column()
  doctorId!: number;

  @Field()
  @ManyToOne(() => User, (user) => user.patients)
  doctor: User;

  @Field()
  @Column()
  notes: string;

  @Field(() => [Scan])
  @OneToMany(() => Scan, (scan) => scan.patient, { eager: true })
  scans: Scan[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
