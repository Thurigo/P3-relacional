import { Entity, PrimaryGeneratedColumn, Column, NumericType, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Categoria } from "./Categorias"
import { User } from "./Users"

export type status = "CONCLUIDA" | "ANDAMENTO" | "PENDENTE";
@Entity('tasks')
export class Tasks{


    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    titulo:string 

    @Column()
    dataStart:Date

    @Column()
    dataClose:Date

    @Column()
    tipo:string

    @Column({nullable:true})//opcional //TALVEZ tenha que ligar com categoria
    categoria:string

    @Column({
        type:"enum",
        enum:["CONCLUIDA" , "ANDAMENTO" , "PENDENTE"],
        default:"PENDENTE"
    }) 
    staus:status 

    @ManyToOne(()=> User, user => user.tasks) //usuário válido
    @JoinColumn({name: 'user_id'})
    User:User 


}