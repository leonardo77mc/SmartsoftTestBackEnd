import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { DeleteResult, Repository } from "typeorm";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { DataOneDto } from "../../validations/table-data/table-data-one.dto";

@Injectable()
export class TableDataOneService {

  constructor(@Inject(Constantes.TABLE_DATA_ONE_REPOSITORY) private tableDataOneRepository: Repository<TableDataOneEntity>) {
  }

  /**
   * Method to save data in the tableData1.
   * @param {dataOneDto}
   * @return {Promise}
   */
  post(dataOneDto: DataOneDto): Promise<TableDataOneEntity> {
    return this.tableDataOneRepository.save(dataOneDto);
  }

  /**
   * Method to update data in the tableData1.
   * @param dataOneDto
   * @return {Promise}
   */
  put(dataOneDto: DataOneDto): Promise<DataOneDto> {
    return this.tableDataOneRepository.manager.save(dataOneDto);
  }

  /**
   * Method to get data in the tableData1.
   * @return {Promise}
   */
  get(): Promise<TableDataOneEntity[]> {
    return this.tableDataOneRepository.find();
  }

  /**
   * Method to delete data in the tableData1.
   * @return {void}
   */
  delete(tc: string): Promise<DeleteResult> {
    return this.tableDataOneRepository
      .createQueryBuilder()
      .delete()
      .from(TableDataOneEntity)
      .where("T1C1 = :tc", { tc })
      .execute();
  }

}