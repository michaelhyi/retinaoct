import { User } from "../entities/User";
import { Field, ObjectType } from "type-graphql";
import { Patient } from "../entities/Patient";

@ObjectType()
class Error {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@ObjectType()
export class PatientResponse {
  @Field(() => Patient, { nullable: true })
  patient?: Patient;

  @Field(() => Error, { nullable: true })
  error?: Error;
}
