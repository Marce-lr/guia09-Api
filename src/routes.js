const express = require("express");
const router = express.Router();

// Controladores
const usuariosController = require("./controllers/usuarios.controller");
const productosController = require("./controllers/productos.controller");

// Rutas de Usuarios
router.get("/usuarios", usuariosController.findAll);
router.get("/usuarios/:id", usuariosController.findOne);
router.post("/usuarios", usuariosController.create);
router.put("/usuarios/:id", usuariosController.update);
router.delete("/usuarios/:id", usuariosController.delete);

// Rutas de Productos
router.get("/productos", productosController.findAll);
router.get("/productos/:id", productosController.findOne);
router.post("/productos", productosController.create);
router.put("/productos/:id", productosController.update);
router.delete("/productos/:id", productosController.delete);

module.exports = router;
