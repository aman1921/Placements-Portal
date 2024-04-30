require("dotenv").config();

const express = require("./server/node_modules/express");
const app = require("./server/app");
const routes = require("./server/routes");
const path = require("path");
const md5File = require("md5-file");

//Server Routes
app.get("/api", (req, res) => res.send("IIITL Placement Portal API"));
app.use("/api/", routes);

//Client Routes
const hash = md5File.sync("./client/build/asset-manifest.json");
const etag = `W/\"${hash}\"`;
const buildPath = path.normalize(path.join(__dirname, "client", "build"));

app.get("/", async (req, res) => {
  // res.set("Cache-Control", "no-store");
  res.set("ETag", etag);
  res.sendFile(path.join(buildPath, "index.html"));
});

app.get(
  "*",
  express.static(buildPath, { etag: true, cacheControl: true }),
  async (req, res) => {
    res.set("ETag", etag);
    res.sendFile(path.join(buildPath, "index.html"));
  }
);

//PORT
const port = process.env.PORT || 3000;

//Starting a server
app.listen(port, console.log(`Server is running at port ${port}`));
