import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("users") // specify table name, otherwise it will use the class name as the table name
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, length: 255})
    name: string

    @Column({nullable: false, length: 255})
    email: string

    @Column({nullable: true})
    email_verified_at: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    public isEmailVerified(): boolean {
        return (this.email_verified_at) ? true : false;
    }
}