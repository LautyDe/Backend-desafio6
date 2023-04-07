import mongoose from "mongoose";

const URI =
  "mongodb+srv://lautydp:lautydp@cluster0.axvssct.mongodb.net/ecommerce?retryWrites=true&w=majority";

try {
  mongoose.connect(URI);
  console.log("Conectado a la base de datos");
} catch (error) {
  console.log(error);
}
