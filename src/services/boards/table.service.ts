import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { Repository } from "typeorm";
import { TableEntity } from "../../repositories/boards/table.entity";

@Injectable()
export class TableService {

  constructor(@Inject(Constantes.TABLE_REPOSITORY) private tableRepository: Repository<TableEntity>) {
  }

  get(): Promise<TableEntity[]> {
    return this.tableRepository.find();
  }

  getDetail(id: number): Promise<TableEntity[]> {
    return this.tableRepository.createQueryBuilder('TableType')
      .select([
          'TableType.id',
          'TableType.name',
          'TableStructure.id',
          'TableStructure.header',
          'TableStructure.dataType',
          'TableStructure.format',
          'TableStructure.required'
      ])
      .leftJoin('TableType.columns', 'TableStructure')
      .where('TableType.id=:id', {id})
      .getMany();
  }

}

function ISNULL(): string {
    throw new Error("Function not implemented.");
}
