import {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog
} from '../models/blog.model.js';

export const getBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewBlog = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "La imagen es obligatoria" });
    req.body.imagen = req.file ? req.file.filename : null;

    const insertId = await createBlog(req.body);
    res.status(201).json({ message: 'Blog creado exitosamente', id: insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await getBlogById(id);
    blog ? res.json(blog) : res.status(404).json({ message: 'Blog no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExistingBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, contenido, id_categoria, id_subcategoria } = req.body;
    const imagen = req.file ? req.file.filename : null;

    const result = await updateBlog(id, titulo, contenido, imagen, id_categoria, id_subcategoria);
    result ? res.json({ message: 'Blog actualizado correctamente' }) : res.status(404).json({ message: 'Blog no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteExistingBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBlog(id);
    result ? res.json({ message: 'Blog eliminado correctamente' }) : res.status(404).json({ message: 'Blog no encontrado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
