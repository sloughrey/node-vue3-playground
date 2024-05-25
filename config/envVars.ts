import { env } from "process";

export const DB_TYPE = env.DB_TYPE as "mysql" | "mariadb" | "mssql"; 
export const DB_HOST = env.DB_HOST as string; 
export const DB_USERNAME = env.DB_USERNAME as string; 
export const DB_PASSWORD = env.DB_PASSWORD as string; 
export const DB_DATABASE = env.DB_DATABASE as string; 
export const DB_PORT = env.DB_PORT as unknown as number; 