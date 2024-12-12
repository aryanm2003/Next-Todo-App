import mongoose from "mongoose"

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://gojosatoru20245:jXMHymndv9v5W4EK@cluster0.uy5m8.mongodb.net/todo-app');
    console.log("Db connected");
}