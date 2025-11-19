import pool from '../config/database.js';

export const existCategory = async (id) => {
  const [rows] = await pool.query('SELECT id FROM categorias WHERE id = ?', [id]);
  return rows[0] || null;
}