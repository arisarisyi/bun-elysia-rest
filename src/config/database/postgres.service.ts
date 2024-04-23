import { PgConfig } from "./postgres.config"
import { DataSourceOptions } from "typeorm"

export const typeOrmConfig: DataSourceOptions = {
  ...PgConfig,
  type: "postgres",
  synchronize: process.env.NODE_ENV === "development" ? true : false,
}
