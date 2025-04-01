
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log(" Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));



// Definir el esquema
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
  });
  
  // Crear el modelo
  const Customer = mongoose.model("Customer", customerSchema);
  
  // Buscar y ordenar documentos en la colección
  const findAndSortCustomers = async () => {
    try {
      const mysort = { name: 1 }; // Orden ascendente
      const results = await Customer.find().sort(mysort);
  
      if (results.length > 0) {
        console.log(" Clientes ordenados:", results);
      } else {
        console.log(" No se encontraron clientes");
      }
    } catch (error) {
      console.error(" Error al buscar clientes:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  findAndSortCustomers();