
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err.message));

// Definir un esquema (estructura de la colección)
const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
});

// Crear el modelo basado en el esquema (esto crea la colección "customers" automáticamente)
const Customer = mongoose.model("Customer", customerSchema);

// Cerrar la conexión después de crear la colección (opcional)
mongoose.connection.once("open", () => {
  console.log("Colección 'customers' lista para usarse");
  mongoose.connection.close();
});