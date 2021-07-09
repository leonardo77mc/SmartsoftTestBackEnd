import { Get, Param } from "@nestjs/common";
import { ResApiController } from "../../utils/decorators/api/api.decorator";
import { TableService } from "../../services/boards/table.service";
import { TableEntity } from "../../repositories/boards/table.entity";

@ResApiController("configuration")
export class ConfiguracionController {

  constructor(private readonly _tableService: TableService) {}

  @Get()
  async getTables() {
    let tables: TableEntity[] = [];
    try {
      tables = await this._tableService.get();
    } catch (e) {
      console.log('Error to query tables:', e.message);
    }
    return tables;
  }

  @Get('table-detail/:id')
  async getTableDetail(@Param('id') id: number) {
    let tableDetails: TableEntity[] = [];
    try {
      tableDetails = await this._tableService.getDetail(Number(id));
    } catch (e) {
      console.log('Error to query detail of the tables:', e.message);
    }
    return tableDetails;
  }

}
