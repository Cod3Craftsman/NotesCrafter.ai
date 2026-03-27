import mongoose from "mongoose"
const connectDb = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("✅Data base successfully connected")
  } catch (error) {
    console.log("❌Error in connection Data base")
  }
}
export default connectDb