import { Module } from "@nestjs/common";
import { tableStructureProvider } from "../../providers/boards/table-structure.provider";
import { TableStructureService } from "../../services/boards/table-structure.service";

/**
 * Module that contains the array of custom providers of TableStructureEntity.
 */
@Module({
  providers: [...tableStructureProvider, TableStructureService],
  exports: [TableStructureService]
})
export class TableStructureModule {

}