import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gantengin",
});

try {
  await db.connect();
  console.log("Berhasil terkoneksi dengan database");
} catch (error) {
  console.log("Gagal Terkoneksi dengan database", error);
}

export default db;
