import db from "../config/db.js";
// Get All Data User
export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM user");
  return rows;
};

// Insert In Mysql
export const registUser = async (data) => {
  const { username, password, role, email, noHp } = data;

  const [result] = await db.query(
    "INSERT INTO user (username, password, role, email, noHp ) VALUES (?,?,?,?,?)",
    [username, password, role, email, noHp]
  );

  return {
    id: result.insertId,
    ...data,
  };
};

// Login
export const login = async (data) => {
  const { username, password } = data;

  const [rows] = await db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password]
  );

  if (rows.length === 0) {
    return null;
  }
  // Mereturn data yang ditemukan
  return rows[0];
};
