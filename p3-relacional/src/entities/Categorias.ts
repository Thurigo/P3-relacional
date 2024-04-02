import { Entity, PrimaryGeneratedColumn, Column, NumericType } from "typeorm"

@Entity('categorias')
export class Categoria {


    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nome:string

    @Column() // identificar visualmente 
    cor:string
}