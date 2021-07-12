import { Inject, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as dotenv from 'dotenv';
import { Constantes } from "src/utils/constant/constantes";
import * as Joi from "joi";
import { EnvConfig } from "src/utils/typesAliases/env-config.type";

@Injectable()
export class ConfigService {

  private readonly envConfig: EnvConfig;

  /**
   *
   * @param {string} options
   */
  constructor(@Inject(Constantes.OPTIONS_CONFIG) private options) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    this.validation(this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getLOGYAML(): string {
    return this.envConfig['LOGYAML'];
  }

  /**
   * Method to validate the configuration of the environment variables that are required.
   * @param {EnvConfig} envConfig
   * @return {Promise}
   */
  async validation(envConfig: EnvConfig): Promise<any> {
    const validationSchema = Joi.object({
      PORT: Joi.number().required(),
      LOGYAML: Joi.string().required(),
      HOST: Joi.string().required(),
      PORT_DATABASE: Joi.number().required(),
      USERNAME_DATABASE: Joi.string().required(),
      PASSWORD_DATABASE: Joi.string().required(),
      NAME_DATABASE: Joi.string().required()
    });
    let success = null;
    try {
      success = await validationSchema.validateAsync(envConfig);
    } catch (e) {
      throw new Error(`${global.logYml.error_load_config_environment}${e.message}`);
    }
    return success;
  }

}