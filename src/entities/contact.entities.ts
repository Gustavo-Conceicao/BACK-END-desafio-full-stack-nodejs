import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./user.entities";

@Entity("contacts")
class Contact {
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

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export default Contact;
