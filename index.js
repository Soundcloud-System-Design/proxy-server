const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/songs/:songId", async (req, res) => {
  const { locationId } = req.params;
  await axios
    .get(
      `http://ec2-54-219-53-4.us-west-1.compute.amazonaws.com/`
    )
    .then(result => {
      res.send(result.data);
    });
  res.end();
});




app.listen(4040, () => {
  console.log("Listening on 4040");
});
