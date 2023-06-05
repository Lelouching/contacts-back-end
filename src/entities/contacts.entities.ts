import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./users.entities"

@Entity("contacts")
export class Contact{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 50 })
    fullName: string

    @Column({ type: "varchar", length: 60 })
    email: string

    @Column({ type: "varchar", length: 15 })
    phone: string

    @CreateDateColumn({ type: "date" })
    createdAt: Date

    @UpdateDateColumn({ type: "date" })
    updatedAt: Date

    @ManyToOne(() => User, (user) => user.contacts)
    user: User
}