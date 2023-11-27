import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ProductProperties } from "./ProductProperties";

@Entity({name: 'product'})
    export class Product {
        @PrimaryGeneratedColumn({type: 'bigint'})
        id: number

        @Column()
        title: string

        @Column()
        price: number

        @Column({unique: null, nullable: true})
        discountPrice: number

        @Column({default: 1})
        status: number

        @Column()
        image: string

        @ManyToOne(() => ProductProperties, (productproperties) => productproperties.product)
        @JoinColumn()
        productproperties: ProductProperties
    }