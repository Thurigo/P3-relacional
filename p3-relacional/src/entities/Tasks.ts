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
    descricao:string 

    @Column()
    dataStart:Date

    @Column()
    dataClose:Date

    @Column()
    tipo:string

    @Column({
        type:"enum",
        enum:["CONCLUIDA" , "ANDAMENTO" , "PENDENTE"],
        default:"PENDENTE"
    }) 
    staus:status 

    @ManyToOne(()=> User, user => user.tasks) 
    @JoinColumn({name: 'user_id'})
    User:User 

    @ManyToOne(() => Categoria, categoria => categoria.id, { nullable: true } )
    @JoinColumn({name:'categoria_id'})
    categoria:Categoria
}