import * as fs from 'fs';
import * as yaml from 'js-yaml';

export abstract class Yaml {

    public error_to_save_table;
    public error_to_query_tables;
    public error_to_update_table;
    public error_to_query_table_data;
    public error_load_config_environment;
    public error_to_query_details_of_the_tables;

    static loadYml(url) {
        try {
            return yaml.safeLoad(fs.readFileSync(url, 'utf8'));
        } catch (e) {
            console.log('Error al cargar el archivo yml');
        }
    }

}