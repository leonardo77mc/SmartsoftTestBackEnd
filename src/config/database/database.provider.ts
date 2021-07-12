import { Constantes } from "src/utils/constant/constantes";
import { createConnection } from "typeorm";
import { TableEntity } from "../../repositories/boards/table.entity";
import { TableStructureEntity } from "../../repositories/boards/table-structure.entity";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { TableDataTwoEntity } from "../../repositories/table-data/table-data-two.entity";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";
import { ConfigService } from "../environment/config.service";

/**
 * Custom provider to configure the database.
 */
export const databaseProviders = [
  {
    provide: Constantes.CONECTION_DATABASE,
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => await createConnection({
      type: 'mysql',
      host: config.get('HOST'),
      port: Number(config.get('PORT_DATABASE')),
      username: config.get('USERNAME_DATABASE'),
      password: '',
      database: config.get('NAME_DATABASE'),
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