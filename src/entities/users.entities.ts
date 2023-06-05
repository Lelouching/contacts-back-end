import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contacts.entities";

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

    @CreateDateColumn({ type: "date" })
    createdAt: Date

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date

    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt: Date | null | undefined

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts: Contact[]
}