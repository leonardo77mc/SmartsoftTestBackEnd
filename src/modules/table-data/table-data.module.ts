import { Module } from "@nestjs/common";
import { TableDataOneService } from "../../services/table-data/table-data-one.service";
import { tableDataProvider } from "../../providers/table-data/table-data.provider";
import { TableDataTwoService } from "../../services/table-data/table-data-two.service";
import { TableDataThreeService } from "../../services/table-data/table-data-three.service";

/**
 * Module that contains the array of custom providers of TableData One Entity,
 * TableDataTwoEntity y TableDataThreeEntity.
 */
@Module({
  providers: [
    ...tableDataProvider,
    TableDataOneService,
    TableDataTwoService,
    TableDataThreeService
  ],
  exports: [
    TableDataOneService,
    TableDataTwoService,
    TableDataThreeService
  ]
})
export class TableDataModule {}