import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contact'}) 
    export class Contact {
        @PrimaryGeneratedColumn({type: 'bigint'}) 
        id: number

        @Column()
        name: string

        @Column()
        phone: string

        @Column()
        email: string

        @Column()
        subject: string

        @Column()
        message: string
    }