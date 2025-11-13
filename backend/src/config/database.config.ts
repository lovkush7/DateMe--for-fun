import {DataSource} from "typeorm"
import { envconfig } from "./env.config.ts";
import { User } from "../entities/User.entities.ts";

const AppDataSource = new DataSource({
    type: "postgres",
    host: envconfig.DB_HOST!,
    port: +(envconfig.DB_PORT!),
    username: envconfig.DB_USERNAME!,
    password: envconfig.DB_PASSWORD!,
    database: envconfig.DB_DATABASE!,
    entities: [User],
    synchronize: true,
    logging: true


});
export default AppDataSource;
