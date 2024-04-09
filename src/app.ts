import express from 'express'
import CONFIG from '../config/default';
import connect from './utils/connect';
import log from './utils/logger'

const app = express()

app.listen(CONFIG.PORT, async() => {
  log.info(`App is running at http://localhost:${CONFIG.PORT}`);
  await connect()
  
})