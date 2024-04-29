import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Tasks } from "./Tasks"
import { Categoria } from "./Categorias"

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    peso: number

    @Column()
    senha: string

    @Column()
    email: string

    @OneToMany(()=> Tasks, task => task.User)
    tasks:Tasks[]

    @OneToMany(()=> Categoria, categoria => categoria.User)
    categorias:Categoria[]
}
