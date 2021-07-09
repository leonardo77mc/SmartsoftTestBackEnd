import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('TableData1')
export class TableDataOneEntity {
  @PrimaryColumn() T1C1: number;
  @Column() T1C2: string;
  @Column() T1C3: number;
  @Column() T1C4: Date;
}