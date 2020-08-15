const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(bodyParser.json());
app.use(cors());

//dev logginh
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//profile routes
app.use("/api/v1/profile", require("./routes/profile.js"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode and listening on port ${port}`
  );
});
