// backend/server.mjs
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import flightOffersRouter from "./routes/flightOffers.js";
import dotenv from "dotenv";
import cors from "cors";

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Conectar ao MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Conectado");
  })
  .catch((err) => {
    console.error("Erro na conexão com o MongoDB:", err);
  });

// Configurações do Express
app.use(express.json());

// Rotas de usuário
app.use("/api", userRoutes);

// Rotas de ofertas de voos
app.use("/api/flights", flightOffersRouter);

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0"; // Vincula a todas as interfaces de rede
app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
