import mongoose from 'mongoose'
import CONFIG from '../../config/default'

async function connect() {
  try{
    await mongoose.connect(CONFIG.MONGODB_URI)
    console.log('db successfully connected')
  }
  catch (error) {
    console.log(`unable to connect to db ${error}`)
    process.exit(1)
  }
}

export default connect