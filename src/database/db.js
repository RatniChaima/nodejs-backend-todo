const mongoose = require("mongoose");

async function connection() {
  await mongoose
    .connect( "mongodb+srv://chaima:NtVln3QuB9DfiUwi@cluster0.jg6lqkd.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connection Success.");
    })
    .catch((error) => {
      console.log("Database connection error : ", error);
    });
}

function createSchema(schema) {
  return new mongoose.Schema(schema, {
    timestamps: true,
  });
}

function createModel(name, schemaStructor) {
  let schema = createSchema(schemaStructor);
  //Explication après
  schema.plugin(require("mongoose-autopopulate"));
  ///////////////////
  return mongoose.model(name, schema);
}

function createInheritedModel(name, Model, schema) {
  return Model.discriminator(name, createSchema(schema));
}

module.exports = {connection, createModel, createInheritedModel};