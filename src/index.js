const express = require("express");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const librosRoutes = require("./routes");
require("dotenv").config();
const cors = require("cors");

const app = express();

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutos
  max: 1000, // Límite de 1000 solicitudes
  message:
    "Has excedido el número de solicitudes permitidas. Por favor intenta más tarde.",
});

app.use(express.static("public"));
//Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/api", limiter);

//rutas
app.use("/api", librosRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a la API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
