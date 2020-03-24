import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const dotenv = require("dotenv");
dotenv.config();

const server = express();
server.set('view engine', 'ejs');
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

import setRoutes from "./routes";
setRoutes(server);

export default server;