const express= require("express");
const path= require("path");
const routes = require("./routes/routes");
const connecttodb= require("./database/db");

connecttodb();
const app = express();
const port = 3000;
app.set("view engine", "ejs");
// style css
app.use(express.static(path.join( __dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

// server
app.listen(port ,()=>
    console.log(`app is working on 3000 http://localhost:${port}`)
);
