
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
  
  // Insertar un documento en la colección
  const insertCustomer = async () => {
    try {
      const myobj = { name: "Company Inc", address: "Highway 37" };
      const customer = new Customer(myobj);
      await customer.save();
      console.log("✅ Documento insertado:", customer);
    } catch (error) {
      console.error("❌ Error al insertar documento:", error.message);
    } finally {
      mongoose.connection.close();
    }
  };
  
  insertCustomer();