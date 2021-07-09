import { Connection } from "typeorm";
import { Constantes } from "../../utils/constant/constantes";
import { TableEntity } from "../../repositories/boards/table.entity";


export const tableProvider = [
  {
    provide: Constantes.TABLE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(TableEntity),
    inject: [Constantes.CONECTION_DATABASE]
  }
];