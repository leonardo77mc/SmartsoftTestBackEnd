import { DynamicModule, Global, Module } from "@nestjs/common";
import { Constantes } from "../../utils/constant/constantes";
import { ConfigService } from "./config.service";


@Global()
@Module({})
export class ConfigModule {

  static register(option): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: Constantes.OPTIONS_CONFIG,
          useValue: option
        },
        ConfigService],
      exports: [ConfigService]
    };
  }

}