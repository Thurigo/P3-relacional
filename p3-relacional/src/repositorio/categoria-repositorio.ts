
import { AppDataSource } from "../data-source";
import { Categoria } from "../entities/Categorias";
import { Tasks } from "../entities/Tasks";
import { User } from "../entities/Users";

export const categoriaRepositorio = AppDataSource.getRepository(Categoria)
