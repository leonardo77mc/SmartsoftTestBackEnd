import { Constantes } from "../../utils/constant/constantes";
import { Connection } from "typeorm";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { TableDataTwoEntity } from "../../repositories/table-data/table-data-two.entity";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";

/**
 * Array of custom providers for get repositories TableDataOneEntity, TableDataTwoEntity y TableDataThreeEntity.
 */
export const tableDataProvider = [
  {
    provide: Constantes.TABLE_DATA_ONE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(TableDataOneEntity),
    inject: [Constantes.CONECTION_DATABASE]
  },
  {
    provide: Constantes.TABLE_DATA_TWO_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(TableDataTwoEntity),
    inject: [Constantes.CONECTION_DATABASE]
  },
  {
    provide: Constantes.TABLE_DATA_THREE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(TableDataThreeEntity),
    inject: [Constantes.CONECTION_DATABASE]
  }
]