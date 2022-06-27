import express from "express";
import morgan from "morgan";

const PORT = 8080;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  console.log("somebody is trying to go home");
  return res.send("final message");
};
app.use(logger);
app.get("/", handleHome);

app.listen(PORT);
