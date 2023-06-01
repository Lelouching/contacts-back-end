import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}