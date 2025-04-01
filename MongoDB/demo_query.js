
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
  
  // Buscar múltiples documentos en la colección
  const findCustomers = async () => {
    try {
      const query = { address: "Park Lane 38" };
      const results = await Customer.find(query);
      
      if (results.length > 0) {
        console.log(" Clientes encontrados:", results);
      } else {
        console.log(" No se encontraron clientes con esa dirección");
      }
    } catch (error) {
      console.error(" Error al buscar clientes:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  findCustomers();