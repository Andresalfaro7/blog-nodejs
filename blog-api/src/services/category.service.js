import pool from '../config/database.js';

export const existCategory = async (id) => {
  const [rows] = await pool.query('SELECT id FROM categorias WHERE id = ?', [id]);
  return rows[0] || null;
}

export const getCategoryByName = async(name) =>{
  const [rows] = await pool.query('SELECT nombre FROM categorias WHERE nombre = ?', [name]);
  return rows[0] || null;
}