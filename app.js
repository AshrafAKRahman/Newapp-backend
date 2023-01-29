const express = require("express");
const request = require("request");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/getnews", (req, res) => {
  request(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0bbf0fae28ef47a8b3a4ee575c866001",
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body);
      }
    }
  );
});

app.listen(port, () => console.log("Example app listening on port ${port}!"));
