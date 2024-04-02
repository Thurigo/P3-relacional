import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Tasks } from "./Tasks"

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



}
