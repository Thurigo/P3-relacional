import { Entity, PrimaryGeneratedColumn, Column, NumericType, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm"
import { User } from "./Users"
import { Tasks } from "./Tasks"

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
    
    @Column() 
    cor:string
    
    @ManyToOne(()=> User, user => user.categorias) 
    @JoinColumn({name: 'user_id'})
    User:User 

    @OneToMany(() => Tasks, task => task.categoria)
    task:Tasks[]
}