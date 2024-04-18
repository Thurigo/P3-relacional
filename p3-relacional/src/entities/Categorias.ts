import { Entity, PrimaryGeneratedColumn, Column, NumericType, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./Users"

@Entity('categorias')
export class Categoria {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome:string
    
    @Column() // identificar visualmente 
    cor:string
    
    @ManyToOne(()=> User, user => user.categorias) //usuário válido
    @JoinColumn({name: 'user_id'})
    User:User 
}