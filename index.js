import './config/database';
import server from './config/server';
const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});