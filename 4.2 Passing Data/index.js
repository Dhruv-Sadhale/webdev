import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // let obj=req.body.fname.length + req.body.lname.length;
         
  

  res.render("index.ejs");
});
  
app.post("/submit", (req, res) => {
  
  const obj= req.body["fName"].length+ req.body["lName"].length;   
  res.render("index.ejs",{obj:obj});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
