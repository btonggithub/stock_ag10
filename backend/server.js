const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

var corsOptions = {
  origin: ["https://www.w3schools.com", "http://localhost:4200"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// middle ware
app.use("/images", express.static("images"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./controller"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const env = `${process.env.NODE_ENV || "development"}`;
  console.log(`App listening on env ${env}:${PORT}`);
});
