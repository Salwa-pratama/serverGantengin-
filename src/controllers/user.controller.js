import { getAllUsers, registUser, login } from "../services/user.services.js";
import { success, error } from "../utils/response.js";

// Get All Data
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    const response = success(res, users, "berhasil mengambil data");
    return response.data;
  } catch (err) {
    return error(res, err.message);
  }
};

// Register
export const addUser = async (req, res) => {
  try {
    const createdUser = await registUser(req.body);
    return success(res, createdUser, "Berhasil Registrasi");
  } catch (err) {
    return error(res, err.message);
  }
};

// Login
export const userLogin = async (req, res) => {
  try {
    const user = await login(req.body);
    if (!user) {
      return error(res, "username atau password salah", 401);
    }
    return success(res, user, "Login Berhasil Bray!!");
  } catch (err) {
    // Ini error nya lebih ke teknis
    return error(res, err.message);
  }
};
