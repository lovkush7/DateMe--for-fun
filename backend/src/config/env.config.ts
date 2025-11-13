 import "dotenv/config"
 export class envconfig{
static DB_HOST = process.env.DB_HOST;
static DB_USERNAME = process.env.DB_USERNAME;
static DB_PORT = process.env.DB_PORT;
static DB_PASSWORD =  process.env.DB_PASSWORD;
static DB_DATABASE = process.env.DB_DATABASE;


static  JWT_SECRET = process.env.JWT_SECRET;
}
