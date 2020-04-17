const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/songs/:songId", async (req, res) => {
  const { songId } = req.params;
  await axios
    .get(
      `http://ec2-54-219-53-4.us-west-1.compute.amazonaws.com/songs/${songId}`
    )
    .then((result) => {
      res.send(result.data);
    });
  res.end();
});

app.get("/getPlaylist/:playlist_Id", async (req, res) => {
  const { playlist_Id } = req.params;

  await axios
    .get(
      `http://ec2-54-183-39-164.us-west-1.compute.amazonaws.com/getPlaylist/${playlist_Id}`
    )
    .then((result) => {
      res.send(result.data);
    });
  res.end();
});

app.get("/artist", async (req, res) => {
  const { playlist_Id } = req.params;
  await axios
    .get(
      `http://ec2-54-183-200-194.us-west-1.compute.amazonaws.com/artist`
    )
    .then((result) => {
      res.send(result.data);
    });
  res.end();
});

app.listen(4040, () => {
  console.log("Listening on 4040");
});
