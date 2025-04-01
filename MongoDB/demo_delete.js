const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(" Error al conectar a MongoDB:", err.message));

// Definir el esquema
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
  });
  
  // Crear el modelo
  const Customer = mongoose.model("Customer", customerSchema);
  
  // Eliminar un documento de la colección
  const deleteCustomer = async () => {
    try {
      const myquery = { address: "Mountain 21" };
      const result = await Customer.deleteOne(myquery);
  
      if (result.deletedCount > 0) {
        console.log(" 1 documento eliminado");
      } else {
        console.log(" No se encontró ningún documento con esa dirección");
      }
    } catch (error) {
      console.error(" Error al eliminar el documento:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  deleteCustomer();