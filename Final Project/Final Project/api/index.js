import express from 'express'
import connectDB from './db.js'
import router from './routes/Routes.js'

const app = express()

const port = 3000
const DATABASE_URL = "mongodb://localhost:27017"

// Database Connection
connectDB(DATABASE_URL)


// Routes
app.use(express.json())
app.use('/api',router)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  });

  