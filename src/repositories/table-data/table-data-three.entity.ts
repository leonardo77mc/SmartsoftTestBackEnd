import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('TableData3')
export class TableDataThreeEntity {
  @PrimaryColumn() T3C1: number;
  @Column() T3C2: string;
  @Column() T3C3: Date;
}