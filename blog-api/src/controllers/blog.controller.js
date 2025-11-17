<<<<<<< HEAD
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
    if (!req.file) return res.status(400).json({message: "La imagen es obligatoria"});
    
    const { titulo, contenido, id_usuario, id_categoria, id_subcategoria } = req.body;
    const imagen = req.file ? req.file.filename : null;

    const insertId = await createBlog(titulo, contenido, imagen, id_usuario, id_categoria, id_subcategoria);
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
=======
import * as Blog from '../models/blog.model.js';

export const getBlogs = async(req, res) =>{
    try {
        const dataBlogs = await Blog.getAllBlogs();
        res.
        status(200)
        .json({
            message: "Los blogs han sido obtenidos exitosamente",
            data: dataBlogs
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los blogs",
            error: error
        });
    }
}

export const getBlog = async(req, res) =>{
    try {
       const blog = await Blog.getBlogById(req.params.id);
       if (!blog) res.status(404).json({message: "Blog no encontrado"});
       res
       .status(200)
       .json({
            message: "Blog encontrado",
            data: blog
       });
    } catch (error) {
       res
        .status(500)
        .json({
            message: "Error al obtener el blog",
            error: error
        }); 
    }
}

export const addBlog = async(req, res) =>{
    try {
        req.body.imagen = req.file ? req.file.filename : null;
        const blog = await Blog.createBlog(req.body);
        res
        .status(201)
        .json({
            message: "Blog creado con exito",
            data: blog
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al crear el blog",
            error: error
        }); 
    }
}

export const editBlog = async (req, res) =>{
    try {
        req.body.imagen = req.file ? req.file.filename : null;
        const result = await Blog.updateBlog(req.params.id, req.body);
        res
        .status(200)
        .json({
            message: "Blog actualizado",
            data: result
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al actualizar el blog",
            error: error
        });
    }
}

export const removeBlog = async (req, res) =>{
    try {
       await Blog.deleteBlog(req.params.id);
       res
       .status(200)
       .json({
            message: "El blog ha sido eliminado"
       }) 
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al eliminar el blog",
            error: error
        });
    }
}

>>>>>>> c0718b2f180e8f3fb0882a67fc83763096dc890c
