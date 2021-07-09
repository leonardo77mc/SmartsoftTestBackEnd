import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TableStructureEntity } from "./table-structure.entity";

@Entity('TableType')
export class TableEntity {

  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;

  @OneToMany(()=> TableStructureEntity, (tableStructureEntity)=>tableStructureEntity.table)
  columns: TableStructureEntity[];

}