import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";

export const userRepositorio = AppDataSource.getRepository(User)