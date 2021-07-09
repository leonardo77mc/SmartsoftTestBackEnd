import { Constantes } from "src/utils/constant/constantes";
import { createConnection } from "typeorm";
import { TableEntity } from "../../repositories/boards/table.entity";
import { TableStructureEntity } from "../../repositories/boards/table-structure.entity";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { TableDataTwoEntity } from "../../repositories/table-data/table-data-two.entity";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";



export const databaseProviders = [
  {
    provide: Constantes.CONECTION_DATABASE,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'smartsoft',
      entities: [
        // se importan las entidades de esta forma o con un archivo de configuración __dirname + '/../api/**/*.entity{.ts,.js'
        TableEntity,
        TableStructureEntity,
        TableDataOneEntity,
        TableDataTwoEntity,
        TableDataThreeEntity
      ],
      synchronize: false,
    }),
  },

];