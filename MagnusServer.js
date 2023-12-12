const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

app.use(bodyParser.json({ limit: "950mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "950mb", extended: true }));
app.use(bodyParser.text({ limit: "950mb", extended: true }));
app.use(express.static("public"));

const getReturnJSON = (success, message, data) => {
  return { success, message, data };
};

app.get("/getPoetry/", (req, res) => {
  res.json(
    getReturnJSON(
      true,
      null,
      JSON.parse(fs.readFileSync("./poems.json", "utf-8"))
    )
  );
});

app.get("/getWriting/", (req, res) => {
  res.json(
    getReturnJSON(
      true,
      null,
      JSON.parse(fs.readFileSync("./writing.json", "utf-8"))
    )
  );
});

app.post("/addPoetry/", (req, res) => {
  const poetryData = JSON.parse(fs.readFileSync("./poems.json", "utf-8"));
  poetryData.push(req.body);
  fs.writeFileSync("./poems.json", JSON.stringify(poetryData, null, 2));
  res.json(getReturnJSON(true, "Poem added", null));
});

app.post("/approvePost/:postHeader", (req, res) => {
  //req.body
});

app.listen(5009, logMessage("Geschichte Running"));
