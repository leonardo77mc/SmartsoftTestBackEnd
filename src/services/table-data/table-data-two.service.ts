import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { DeleteResult, Repository } from "typeorm";
import { TableDataTwoEntity } from "../../repositories/table-data/table-data-two.entity";
import { DataTwoDto } from "../../validations/table-data/table-data-two.dto";

@Injectable()
export class TableDataTwoService {

  constructor(@Inject(Constantes.TABLE_DATA_TWO_REPOSITORY) private tableDataTwoRepository: Repository<TableDataTwoEntity>) {
  }

  /**
   * Method to save data in the tableData2.
   * @param {dataTwoDto}
   * @return {Promise}
   */
  post(dataTwoDto: DataTwoDto): Promise<TableDataTwoEntity> {
    return this.tableDataTwoRepository.save(dataTwoDto);
  }

  /**
   * Method to update data in the tableData2.
   * @param {dataTwoDto}
   * @return {Promise}
   */
  put(dataTwoDto: DataTwoDto): Promise<DataTwoDto> {
    return this.tableDataTwoRepository.manager.save(dataTwoDto);
  }

  /**
   * Method to get data in the tableData2.
   * @return {Promise}
   */
  get(): Promise<TableDataTwoEntity[]> {
    return this.tableDataTwoRepository.find();
  }

  /**
   * Method to delete data in the tableData2.
   * @return {void}
   */
  delete(tc: string): Promise<DeleteResult> {
    return this.tableDataTwoRepository
      .createQueryBuilder()
      .delete()
      .from(TableDataTwoEntity)
      .where("T2C1 = :tc", { tc })
      .execute();
  }
}