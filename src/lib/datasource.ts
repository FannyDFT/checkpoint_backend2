import { DataSource } from "typeorm";
import { Country } from "../entities/Country.entity";

export default new DataSource({
  type: "sqlite",
  database: "checkpoint2.sqlite",
  entities: [Country],
  synchronize: true,
  logging: ["error", "query"],
});
