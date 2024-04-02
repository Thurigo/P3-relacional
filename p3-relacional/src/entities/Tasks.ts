import { Entity, PrimaryGeneratedColumn, Column, NumericType, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Categoria } from "./Categorias"
import { User } from "./Users"

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

    @Column() // pendente-em andamento-concluida
    staus:string 

    @ManyToOne(()=> User, user => user.tasks) //usuário válido
    @JoinColumn({name: 'user_id'})
    User:User 


}