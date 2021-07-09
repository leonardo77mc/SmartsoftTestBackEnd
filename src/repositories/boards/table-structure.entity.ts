import { JoinColumn, RelationId } from "typeorm";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TableEntity } from "./table.entity";

@Entity("TableStructure")
export class TableStructureEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() header: string;
  @Column() dataType: string;
  @Column() format: string;
  @Column() required: boolean;

  @ManyToOne(() => TableEntity, (tableEntity) => tableEntity.columns)
  @JoinColumn({ name: "tableTypeId" })
  table: TableEntity;
  @RelationId((tableStructure: TableStructureEntity) => tableStructure.table)
  @Column({ type: "integer" })
  tableTypeId: number;

}