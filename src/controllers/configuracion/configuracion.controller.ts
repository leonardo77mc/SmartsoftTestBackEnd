import { Get, Param } from "@nestjs/common";
import { ResApiController } from "../../utils/decorators/api/api.decorator";
import { TableService } from "../../services/boards/table.service";
import { TableEntity } from "../../repositories/boards/table.entity";

@ResApiController("configuration")
export class ConfiguracionController {

  constructor(private readonly _tableService: TableService) {}

  /**
   * Returns the list of available tables.
   * @param {void}
   * @return {Promise} returns a promise from tableEntity[].
   */
  @Get()
  async getTables(): Promise<TableEntity[]> {
    let tables: TableEntity[] = [];
    try {
      tables = await this._tableService.get();
    } catch (e) {
      console.log(global.logYml.error_to_query_tables, e.message);
    }
    return tables;
  }

  /**
   * param for get details of tables.
   * @param {string} id
   * @return {Promise} return Promise of tableEntity[].
   */
  @Get('table-detail/:id')
  async getTableDetail(@Param('id') id: string): Promise<TableEntity[]> {
    let tableDetails: TableEntity[] = [];
    try {
      tableDetails = await this._tableService.getDetail(Number(id));
    } catch (e) {
      console.log(global.logYml.error_to_query_details_of_the_tables, e.message);
    }
    return tableDetails;
  }

}
