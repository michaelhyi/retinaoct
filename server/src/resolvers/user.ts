import argon2 from "argon2";
import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("first_name") first_name: string,
    @Arg("last_name") last_name: string
  ): Promise<User | null> {
    const hashedPassword = await argon2.hash(password);
    const user = await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
    }).save();
    return user;
  }
}
