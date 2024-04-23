import "reflect-metadata"
import { DataSource } from "typeorm"
import { Elysia } from "elysia"
import { typeOrmConfig } from "./config/database/postgres.service"
import { swagger } from "@elysiajs/swagger"

const AppDataSource = new DataSource(typeOrmConfig)

AppDataSource.initialize()
  .then(() => {
    const app = new Elysia()

    app.use(
      swagger({
        documentation: {
          info: {
            title: "Elysia Documentation",
            version: "1.0.0",
          },
        },
      })
    )

    // Definisikan rute Anda dengan userRoutes atau rute lainnya
    // Contoh: app.use('/users', userRoutes);
    app.get("/", () => "hello from elysia")

    app.listen({ port: process.env.HOST }, () => {
      console.log(`Server is running on http://localhost:${process.env.HOST}`)
    })
  })
  .catch((error) => console.log(error))
