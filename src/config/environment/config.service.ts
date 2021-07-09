import { Inject, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as dotenv from 'dotenv';
import { Constantes } from "src/utils/constant/constantes";
import * as Joi from "joi";

export type EnvConfig = Record<string, any>;

@Injectable()
export class ConfigService {

  private readonly envConfig: EnvConfig;

  constructor(@Inject(Constantes.OPTIONS_CONFIG) private options) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    this.validation(this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getPlivoAuth(){
    return this.envConfig['PLIVO_AUTH_ID'];
  }

  getPlivoAuthToken() {
    return this.envConfig['PLIVO_AUTH_TOKEN'];
  }

  getLOGYAML() {
    return this.envConfig['LOGYAML'];
  }

  async validation(envConfig: EnvConfig) {
    const validationSchema = Joi.object({
      PORT: Joi.number().required(),
    });
    let success = null;
    try {
      success = await validationSchema.validateAsync(envConfig);
    } catch (e) {
      throw new Error('Error en la configuración de entorno:' + e.message);
    }
    return success;
  }

}