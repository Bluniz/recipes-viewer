import express from 'express'
import cors from "cors";

import {client} from "./database/index.js"
import {ErrorHandler} from './middlewares/index.js'
import {RecipeRoutes} from "./routes/index.js"

import 'dotenv/config'


const app = express()
app.use(express.json())
app.use(cors())

app.use("/recipes", RecipeRoutes)
//! Using error handler when occours some error in any part of routes.
app.use(ErrorHandler)

app.listen(3000,  () => {
  client.connect().then(() => {
     console.log('Server started at http://localhost:3000')
  })
})
