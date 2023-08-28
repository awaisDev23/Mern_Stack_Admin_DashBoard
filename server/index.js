import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helemt from "helmet";
import morgan from "morgan";
/* Importing Routes*/
import clientRoutes from "./routes/clientRoutes";
import generalRoutes from "./routes/generalRoutes";
import managementRoutes from "./routes/managementRoutes";
import salesRoutes from "./routes/salesRoutes";
/* Configuration */

dotenv.config();
const app = express();

/* Middleware */
app.use(express.json());
app.use(helemt());
app.use(helemt.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
