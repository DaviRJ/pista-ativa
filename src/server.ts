import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.port || 3000

app.listen(PORT, () => console.log(`Running on ${PORT}`))
