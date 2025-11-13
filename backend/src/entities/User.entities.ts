import { BeforeInsert, Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entities.ts";
import { before } from "node:test";
import bcrypt from "bcryptjs";

@Entity()
export class User extends CommonEntity {

    @Column({type: "varchar"})
    fullname: string;

    @Column({type:'varchar',unique:true})
    email: string;

    @Column({type: "text"})
    password: string;

    @BeforeInsert()
    _(){
        this.password = bcrypt.hashSync(this.password,10)
    }

}