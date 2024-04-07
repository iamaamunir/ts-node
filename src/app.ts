import express from 'express'
import CONFIG from '../config/default';
import connect from './utils/connect';

const app = express()

app.listen(CONFIG.PORT, async() => {
  console.log(`App is running at port:${CONFIG.PORT}`);
  await connect()
  
})