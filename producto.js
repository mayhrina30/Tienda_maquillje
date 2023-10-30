
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
