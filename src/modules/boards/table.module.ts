import { Module } from "@nestjs/common";
import { tableProvider } from "../../providers/boards/table.provider";
import { TableService } from "../../services/boards/table.service";
import { TableDataModule } from "../table-data/table-data.module";

@Module({
  providers: [...tableProvider, TableService],
  exports: [TableService]
})
export class TableModule {
}