import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "./config/environment/config.module";
import { ConfiguracionController } from './controllers/configuracion/configuracion.controller';
import { DatabaseModule } from "./config/database/database.module";
import { TableModule } from "./modules/boards/table.module";
import { TableDataController } from "./controllers/table-data/table-data.controller";
import { TableDataModule } from "./modules/table-data/table-data.module";

@Module({
  imports: [
    ConfigModule.register({ folder: './env' }),
    DatabaseModule,
    TableModule,
    TableDataModule
  ],
  controllers: [AppController, ConfiguracionController, TableDataController],
  providers: [AppService],
})
export class AppModule {}
