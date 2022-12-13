import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"
import { Transaction } from "./transaction.entity";

@Entity("accounts")

export class Account{
    
    @PrimaryColumn("uuid")
    readonly id:string

    @Column()
    balance: number

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}