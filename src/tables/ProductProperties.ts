import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity({name: 'productproperties'})
    export class ProductProperties {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number
        
        @Column() 
        title: string

        @OneToMany(() => Product, (product) => product.productproperties)
        product: Product
    }