import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/asistencia');
        console.log("Base de datos creada y inicializada")
    } catch (error) {
        console.log(error)
    }
}