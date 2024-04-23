import * as dotenv from "dotenv"

dotenv.config()
export const PgConfig = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  // Menentukan lokasi file migrasi
  migrations: [__dirname + "/../migrations/**/*{.ts,.js}"],
  // Menentukan lokasi file subscriber jika diperlukan
  subscribers: [__dirname + "/../subscribers/**/*{.ts,.js}"],
  // Menentukan nama tabel untuk menyimpan log migrasi
  migrationsTableName: "typeorm_migrations",
  logging: process.env.NODE_ENV === "development" ? true : false,
  // Menambahkan opsi CLI untuk migrasi
  cli: {
    migrationsDir: "src/migrations",
  },
}
