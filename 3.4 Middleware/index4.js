import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(req.body.street+req.body.pet);
  });
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
