import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  port: 3006,
  password: "novasuperior",
  database: "Shop",
});
