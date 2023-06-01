import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./users.entities"

@Entity("contacts")
export class Contact{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 50 })
    fullName: string

    @Column({ type: "varchar", length: 60, unique: true })
    email: string

    @Column({ type: "varchar", length: 15, unique: true })
    phone: string

    @CreateDateColumn({ type: "date" })
    createdAt: Date

    @ManyToOne(() => User, (user) => user.id)
    user: User
}