import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "GSTOCK" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
