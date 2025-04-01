
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aaroncabrales35:1234567a@cluster0.6gb9w.mongodb.net/mydb?retryWrites=true&w=majority")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err.message));

  
// Definir el esquema
const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
  });
  
  // Crear el modelo
  const Customer = mongoose.model("Customer", customerSchema);
  
  // Buscar un documento en la colección
  const findCustomer = async () => {
    try {
      const customer = await Customer.findOne({ name: "Company Inc" });
      if (customer) {
        console.log(" Cliente encontrado:", customer);
      } else {
        console.log(" No se encontró el cliente");
      }
    } catch (error) {
      console.error(" Error al buscar cliente:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  findCustomer();