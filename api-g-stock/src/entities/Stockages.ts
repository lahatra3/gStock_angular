import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("stockages", { schema: "GSTOCK" })
export class Stockages {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
