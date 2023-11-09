import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
//import devBundle from './devBundle' 
import path from 'path'
// express application config

// a new Express application instance is created.
const app = express()
const CURRENT_WORKING_DIR = process.cwd()

// Body Parsing Middleware
app.use(express.json());  //  for parsing JSON payloads
app.use(express.urlencoded({ extended: true })); //  for parsing URL-encoded payloads 

// Route Middleware
app.use('/', userRoutes)
app.use('/', authRoutes)

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

//  used to parse cookies attached to the client request object.
app.use(cookieParser())
app.use(compress())
app.use(helmet())

// Cross-Origin Resource Sharing (CORS) Middleware:
app.use(cors())

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message })
    console.log(err)
  }
})
export default app

