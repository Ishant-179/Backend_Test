import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Error occurred in connecting mongoDB", err))
}

export default connectDb;