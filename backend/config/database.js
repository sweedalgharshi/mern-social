const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URL)
    .then((response) => console.log(`Database Connected: ${response.connection.host}`))
    .catch((err) => console.log(err));
};

// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// }
