import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Account } from "./account.entity";

@Entity("users")

export class User{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    username:string

    @Column()
    @Exclude()
    password:string

    @OneToOne(()=>Account,{eager:true})
    @JoinColumn()
    account:Account

    constructor() {
        if (!this.id) {
        this.id = uuid();
        }
    }
}