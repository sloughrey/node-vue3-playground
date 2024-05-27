import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { injectable, inject } from "inversify";
import "reflect-metadata";
import InvTypes from "../types/inversifyTypes"
import { iLogger } from "../interaces/iLogger"
import iUser from "../interaces/iUser";



@injectable()
@Entity("users") // specify table name, otherwise it will use the class name as the table name
export default class User implements iUser {
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

    @inject(InvTypes.iLogger)
    private _logger: iLogger;

    public isEmailVerified(): boolean {
        return (this.email_verified_at) ? true : false;
    }

    public log(): void {
        this._logger.log();
    }
    

}