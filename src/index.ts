import express from "express";
import path from "path";
import pug from "pug";

import apiRouter from "./routes/apiRouter";

const app: express.Application = express();
const port = 3434;

const viewsPath = "src/view";
const publicPath = "public";

console.log(path.resolve(), viewsPath, publicPath);


app.use("/alpinejs", express.static(path.join(path.resolve(), "node_modules/alpinejs/dist")));
app.use("/htmx", express.static(path.join(path.resolve(), "node_modules/htmx.org")));
app.use("/animejs", express.static(path.join(path.resolve(), "node_modules/animejs/lib")));

app.use(express.static(path.join(path.resolve(), publicPath)));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    

    res.status(200).sendFile("index.html", { root: viewsPath });

    
});


app.get("/admin", (req, res) => {
    

    res.status(200).sendFile("adminDashboard.html", { root: viewsPath });

    
});

app.use("/api",apiRouter);



