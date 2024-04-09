import mongoose from 'mongoose'
import CONFIG from '../../config/default'
import log from './logger'

async function connect() {
  try{
    await mongoose.connect(CONFIG.MONGODB_URI)
    log.info('db successfully connected')
  }
  catch (error) {
    log.info(`unable to connect to db ${error}`)
    process.exit(1)
  }
}

export default connect