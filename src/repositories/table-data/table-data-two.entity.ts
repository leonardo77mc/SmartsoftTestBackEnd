import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('TableData2')
export class TableDataTwoEntity {
  @PrimaryColumn() T2C1: number;
  @Column() T2C2: string;
  @Column() T2C3: number;
  @Column() T2C4: Date;
  @Column() T2C5: number;
}