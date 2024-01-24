import express from "express";
import ejs from 'ejs';
//import bodyParser from "body-parser";
//const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    const date= new Date();
    const day=date.getDay();
    //console.log(day);
    let msg1="Hey, it's the weekday";
    let msg2="it's time to work hard";
    if(day==0 || day==6){
        msg1="Hey, it's the weekend";
        msg2="it's time to have fun!";
    }
  res.render("index.ejs", { dayType: msg1, advice:msg2 });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
