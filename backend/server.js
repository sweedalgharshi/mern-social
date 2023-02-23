const app = require("./app");
const { connectDatabase } = require("./config/database");

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}..`);
});
