import pool from "../config/database.js";

export const existSubcategory = async (id) => {
  const [rows] = await pool.query("SELECT id FROM subcategorias WHERE id = ?", [id]);
  return rows[0] || null;
}