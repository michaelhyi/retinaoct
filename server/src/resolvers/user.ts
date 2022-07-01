import argon2 from "argon2";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { UserResponse } from "../utils/types";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async setAi(
    @Arg("id", () => Int) id: number,
    @Arg("ai", { nullable: true }) ai: boolean
  ): Promise<boolean> {
    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({ ai })
      .where({ id })
      .returning("*")
      .execute();
    return true;
  }

  @Query(() => Boolean)
  async getAi(@Arg("id", () => Int) id: number): Promise<boolean> {
    const user = await User.findOne({ where: { id } });
    return user!.ai;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", () => Int) id: number): Promise<boolean> {
    await User.delete({ id });
    return true;
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string
  ): Promise<UserResponse> {
    if (!email.includes("@")) {
      return {
        error: {
          field: "Email",
          message: "Invalid email.",
        },
      };
    }

    if (password.length <= 2) {
      return {
        error: {
          field: "Password",
          message: "Password length must be greater than 2 characters.",
        },
      };
    }

    let user;
    try {
      user = await User.create({
        email,
        password: await argon2.hash(password),
        firstName,
        lastName,
        ai: false,
      }).save();
    } catch (e) {
      if (
        e.detail.includes("already exists") ||
        e.detail.includes("duplicate key")
      ) {
        return {
          error: {
            field: "Email",
            message: "Email already exists.",
          },
        };
      }
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        error: {
          field: "Email",
          message: "A user with that email does not exist.",
        },
      };
    }

    const verified = await argon2.verify(user.password, password);
    if (!verified) {
      return {
        error: {
          field: "Password",
          message: "Incorrect password.",
        },
      };
    }

    return { user };
  }
}
