import mongoose from 'mongoose'

const connectionString =
  'mongodb+srv://shahjawad:<password>@nodeexpressprojects.lswuccc.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB
