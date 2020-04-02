import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import setRoutes from "./routes";
import fileUpload from "express-fileupload";
import dotenv from "dotenv"

dotenv.config();

const server = express();
server.use(fileUpload());
server.set('view engine', 'ejs');
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());


setRoutes(server);

export default server;