import { Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";

// Query: search data;
// Mutation: create, change, or delete.

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser() {
    const user = { id: "10", name: "Felipe" };

    this.data.push(user);

    return user;
  }
}
