import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contacts.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 50 })
    fullName: string

    @Column({ type: "varchar", length: 60, unique: true })
    email: string

    @Column({ type: "varchar", length: 250 })
    password: string

    @Column({ type: "varchar", length: 15, unique: true })
    phone: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null | undefined

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const round: number = getRounds(this.password)

        if(!round){
            this.password = hashSync(this.password, 10)
        }
    }
}