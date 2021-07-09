import { Inject, Injectable } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { Repository } from "typeorm";
import { TableStructureEntity } from "../../repositories/boards/table-structure.entity";

@Injectable()
export class TableStructureService {

  constructor(@Inject(Constantes.TABLE_STRUCTURE_REPOSITORY) private tableStructureRepository: Repository<TableStructureEntity>) {
  }

  get(): Promise<TableStructureEntity[]> {
    return this.tableStructureRepository.find();
  }

}