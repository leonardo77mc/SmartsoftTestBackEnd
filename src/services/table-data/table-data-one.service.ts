import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { DeleteResult, Repository } from "typeorm";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { DataOneDto } from "../../validations/table-data/table-data-one.dto";

@Injectable()
export class TableDataOneService {

  constructor(@Inject(Constantes.TABLE_DATA_ONE_REPOSITORY) private tableDataOneRepository: Repository<TableDataOneEntity>) {
  }

  post(dataOneDto: DataOneDto): Promise<TableDataOneEntity> {
    return this.tableDataOneRepository.manager.save(dataOneDto);
  }

  put(dataOneDto: DataOneDto): Promise<DataOneDto> {
    return this.tableDataOneRepository.manager.save(dataOneDto);
  }

  get(): Promise<TableDataOneEntity[]> {
    return this.tableDataOneRepository.find();
  }

  delete(tc: string): Promise<DeleteResult> {
   return this.tableDataOneRepository
      .createQueryBuilder()
      .delete()
      .from(TableDataOneEntity)
      .where("T1C1 = :tc", { tc })
      .execute();
  }

}