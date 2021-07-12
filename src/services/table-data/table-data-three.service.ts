import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { DeleteResult, Repository } from "typeorm";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";
import { DataThreeDto } from "../../validations/table-data/table-data.three.dto";

@Injectable()
export class TableDataThreeService {

  constructor(@Inject(Constantes.TABLE_DATA_THREE_REPOSITORY) private tableDataThreeRepository: Repository<TableDataThreeEntity>) {
  }

  /**
   * Method to save data in the tableData3.
   * @param {dataThreeDto}
   * @return {Promise}
   */
  post(dataThreeDto: DataThreeDto): Promise<TableDataThreeEntity> {
    return this.tableDataThreeRepository.save(dataThreeDto)
  }

  /**
   * Method to update data in the tableData3.
   * @param {dataThreeDto}
   * @return {Promise}
   */
  put(dataThreeDto: DataThreeDto): Promise<DataThreeDto> {
    return this.tableDataThreeRepository.manager.save(dataThreeDto);
  }

  /**
   * Method to get data in the tableData3.
   * @return {Promise}
   */
  get(): Promise<TableDataThreeEntity[]> {
    return this.tableDataThreeRepository.find();
  }

  /**
   * Method to delete data in the tableData3.
   * @return {void}
   */
  delete(tc: string): Promise<DeleteResult> {
    return this.tableDataThreeRepository
      .createQueryBuilder()
      .delete()
      .from(TableDataThreeEntity)
      .where("T3C1 = :tc", { tc })
      .execute();
  }
}