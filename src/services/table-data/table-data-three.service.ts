import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { DeleteResult, Repository } from "typeorm";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";
import { DataThreeDto } from "../../validations/table-data/table-data.three.dto";

@Injectable()
export class TableDataThreeService {

  constructor(@Inject(Constantes.TABLE_DATA_THREE_REPOSITORY) private tableDataThreeRepository: Repository<TableDataThreeEntity>) {
  }

  post(dataThreeDto: DataThreeDto): Promise<TableDataThreeEntity> {
    return this.tableDataThreeRepository.save(dataThreeDto)
  }

  put(dataThreeDto: DataThreeDto): Promise<DataThreeDto> {
    return this.tableDataThreeRepository.manager.save(dataThreeDto);
  }

  get(): Promise<TableDataThreeEntity[]> {
    return this.tableDataThreeRepository.find();
  }

  delete(tc: string): Promise<DeleteResult> {
    return this.tableDataThreeRepository
      .createQueryBuilder()
      .delete()
      .from(TableDataThreeEntity)
      .where("T3C1 = :tc", { tc })
      .execute();
  }
}