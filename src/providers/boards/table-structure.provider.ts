import { Constantes } from "../../utils/constant/constantes";
import { Connection } from "typeorm";
import { TableStructureEntity } from "../../repositories/boards/table-structure.entity";


export const tableStructureProvider = [{
  provide: Constantes.TABLE_STRUCTURE_REPOSITORY,
  useFactory: (connection: Connection) => connection.getRepository(TableStructureEntity),
  inject: [Constantes.CONECTION_DATABASE]
}];