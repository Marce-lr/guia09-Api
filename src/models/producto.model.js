const sql = require("./db.js");

// Constructor
const Producto = function (producto) {
  this.id = producto.id;
  this.nombre = producto.nombre;
  this.descripcion = producto.descripcion;
  this.preciodecosto = producto.preciodecosto;
  this.preciodeventa = producto.preciodeventa;
  this.cantidad = producto.cantidad;
  this.fotografia = producto.fotografia;
};

Producto.getAll = (result) => {
  sql.query("SELECT * FROM productos", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Producto.findById = (id, result) => {
  sql.query("SELECT * FROM productos WHERE id = ?", [id], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};

// Crear nuevo producto
Producto.create = (nuevoProducto, result) => {
  sql.query("INSERT INTO productos SET ?", nuevoProducto, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    nuevoProducto.id = res.insertId;
    result(null, nuevoProducto);
  });
};

Producto.updateById = (id, producto, result) => {
  sql.query(
    "UPDATE productos SET nombre = ?, descripcion = ?, preciodecosto = ?, preciodeventa = ?, cantidad = ?, fotografia = ? WHERE id = ?",
    [
      producto.nombre,
      producto.descripcion,
      producto.preciodecosto,
      producto.preciodeventa,
      producto.cantidad,
      producto.fotografia,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id, ...producto });
    }
  );
};

Producto.remove = (id, result) => {
  sql.query("DELETE FROM productos WHERE id = ?", [id], (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Producto;
