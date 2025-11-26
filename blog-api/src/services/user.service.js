import pool from '../config/database.js';
import bcrypt from 'bcrypt';

export const existUser = async (id) => {
  const [rows] = await pool.query('SELECT id FROM usuarios WHERE id = ?', [id]);
  return rows[0] || null;
};

<<<<<<< HEAD
export const getUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  return rows[0] || null;
};

export const verifyPassword = async (email, password) => {
  const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  console.log("rows", rows);
  if(rows[0]){
    const isMatch = await bcrypt.compare(password, rows[0].password);
    if(isMatch){
      return {
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].nombre
      };
    }
    return null;
  }
  return null;
=======
export const getUserByEmail = async (email) =>{
  const [rows] = await pool.query('SELECT email FROM usuarios WHERE email = ?', [email]);
  return rows[0] || null;
>>>>>>> 804c4b54a6f5e52a379aa186cd61d78c1793baa0
}