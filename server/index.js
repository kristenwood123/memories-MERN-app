import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js'

const app = express()



app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

//adding a prefix of 'posts' to all the routes in postRoutes
app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://new_user30:new_user30@cluster0.lvgbq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
  .catch((error) => console.log(error.message))

  mongoose.set('useFindAndModify', false)