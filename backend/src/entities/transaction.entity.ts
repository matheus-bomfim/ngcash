import { Entity, Column, PrimaryColumn, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Account } from "./account.entity";

@Entity("transactions")

export class Transaction{

    @PrimaryColumn("uuid")
    readonly id:string;

    @Column()
    value:number;

    @CreateDateColumn({name:"created_at"})
    created_at:Date;

    @ManyToOne(() => Account, {eager:true})
    @JoinColumn()
    debitedAccount:string

    @ManyToOne(() => Account, {eager:true})
    @JoinColumn()
    creditedAccount:string

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}