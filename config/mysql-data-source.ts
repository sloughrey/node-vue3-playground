import { DataSource } from "typeorm";
import User from "../models/UserTypeORMDataMapper";
import { DB_TYPE, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT } from "./envVars"

export const AppDataSource = new DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))