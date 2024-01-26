import { app } from "./app";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});

process.on('SINGINT', ()=>{
  server.close();
  console.log('app is dead!');
});