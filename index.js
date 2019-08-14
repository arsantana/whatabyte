// Imports and app instance 

const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// Route Controllers

app.get("/", (req, res) => {
	res.render("index", { title: "Home" });
});

// app.get("/", (req, res) => {
// 	res.status(200).send("WHATABYTE: Food for Devs");
// });

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});