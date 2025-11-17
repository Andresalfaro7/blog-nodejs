// src/config/staticFiles.js
import express from "express";
import path from "path";

export const registerStaticFiles = (app) => {
  // Carpeta de blogs
  app.use('/uploads/blogs', express.static(path.join(process.cwd(), 'uploads/blogs')));
};
