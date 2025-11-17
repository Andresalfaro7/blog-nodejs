import pool from '../config/database.js';

<<<<<<< HEAD
// Obtener todos los blogs con su categoría y subcategoría
export const getAllBlogs = async () => {
  const [rows] = await pool.query(`
    SELECT 
      b.id,
      b.titulo,
      b.contenido,
      b.imagen,
      u.nombre AS nombre_usuario,
      c.nombre AS nombre_categoria,
      s.nombre AS nombre_subcategoria,
      b.created_at
    FROM blogs b
    INNER JOIN usuarios u ON b.id_usuario = u.id
    INNER JOIN categorias c ON b.id_categoria = c.id
    INNER JOIN subcategorias s ON b.id_subcategoria = s.id
    ORDER BY b.created_at DESC
  `);
  return rows;
};

// Crear un nuevo blog
export const createBlog = async (titulo, contenido, imagen, id_usuario, id_categoria, id_subcategoria) => {
  const [result] = await pool.query(
    `INSERT INTO blogs (titulo, contenido, imagen, id_usuario, id_categoria, id_subcategoria) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [titulo, contenido, imagen, id_usuario, id_categoria, id_subcategoria]
  );
  return result.insertId;
};

// Obtener blog por ID
export const getBlogById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM blogs WHERE id = ?`, [id]);
  return rows[0];
};

// Actualizar blog
export const updateBlog = async (id, titulo, contenido, imagen, id_categoria, id_subcategoria) => {
  const [result] = await pool.query(
    `UPDATE blogs SET titulo = ?, contenido = ?, imagen = ?, id_categoria = ?, id_subcategoria = ? WHERE id = ?`,
    [titulo, contenido, imagen, id_categoria, id_subcategoria, id]
  );
  return result.affectedRows;
};

// Eliminar blog
export const deleteBlog = async (id) => {
  const [result] = await pool.query(`DELETE FROM blogs WHERE id = ?`, [id]);
  return result.affectedRows;
};
=======
export const getAllBlogs = async() =>{
    const [rows] = await pool.query(`
        SELECT 
        b.id,
        b.titulo,
        b.contenido,
        b.imagen,
        u.nombre AS nombre_usuario,
        c.nombre AS nombre_categoria,
        s.nombre AS nombre_subcategoria,
        b.created_at
        FROM blogs b
        INNER JOIN usuarios u ON b.id_usuario = u.id
        INNER JOIN categorias c ON b.id_categoria = c.id
        INNER JOIN subcategorias s ON b.id_subcategoria = s.id
        ORDER BY b.created_at DESC
    `);
    return rows;
}

export const getBlogById = async(id) =>{
    const [rows] = await pool.query(`
        SELECT 
        b.id,
        b.titulo,
        b.contenido,
        b.imagen,
        u.nombre AS nombre_usuario,
        c.nombre AS nombre_categoria,
        s.nombre AS nombre_subcategoria,
        b.created_at
        FROM blogs b
        INNER JOIN usuarios u ON b.id_usuario = u.id
        INNER JOIN categorias c ON b.id_categoria = c.id
        INNER JOIN subcategorias s ON b.id_subcategoria = s.id
        WHERE b.id = ?
    `, [id]);

    return rows[0];
}

export const createBlog = async(blog) =>{
    const { 
        titulo, 
        contenido, 
        imagen, 
        id_usuario, 
        id_categoria, 
        id_subcategoria } = blog;
    const [result] = await pool.query(`
         INSERT INTO blogs (
            titulo, 
            contenido, 
            imagen, 
            id_usuario, 
            id_categoria, 
            id_subcategoria
         )
         VALUES (?,?,?,?,?,?)      
    `, [titulo, contenido, imagen, id_usuario, id_categoria, id_subcategoria]);
    return { id: result.insertId, data:result }
}

export const updateBlog = async(id, blog) =>{
    const { 
        titulo, 
        contenido, 
        imagen, 
        id_usuario, 
        id_categoria, 
        id_subcategoria } = blog;
    const [result] = await pool.query(`
        UPDATE blogs 
        SET
        titulo = ?,
        contenido = ?,
        imagen = ?, 
        id_usuario = ?,
        id_categoria = ?,
        id_subcategoria = ?
        WHERE id = ?
    `, [
        titulo, 
        contenido, 
        imagen,
        id_usuario,
        id_categoria, 
        id_subcategoria, 
        id
    ]);
    return { result }
}

export const deleteBlog = async(id) =>{
    const [result] = await pool.query(`
        DELETE FROM blogs WHERE id = ?
    `, [id]);
    return result.affectedRows;
}
>>>>>>> c0718b2f180e8f3fb0882a67fc83763096dc890c
