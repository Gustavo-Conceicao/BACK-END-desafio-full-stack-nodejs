import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

import Contact from "./contact.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", unique: true, length: 45 })
  email: string;

  @Column({type: "varchar", length: 15})
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @OneToMany(() => Contact, (contacts) => contacts.user)
  contacts: Contact[];
}

export default User;
