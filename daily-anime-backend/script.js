const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { MY_KEY } = require("./config");
const app = express();

app.use(cors());

const animes = [
  {
    id: 21,
    title: "One Piece",
    main_picture: {
      medium: "https://api-cdn.myanimelist.net/images/anime/6/73245.jpg",
      large: "https://api-cdn.myanimelist.net/images/anime/6/73245l.jpg",
    },
  },
  {
    id: 12859,
    title: "One Piece Film: Z",
    main_picture: {
      medium: "https://api-cdn.myanimelist.net/images/anime/6/44297.jpg",
      large: "https://api-cdn.myanimelist.net/images/anime/6/44297l.jpg",
    },
  },
  {
    id: 459,
    title: "One Piece Movie 01",
    main_picture: {
      medium: "https://api-cdn.myanimelist.net/images/anime/1770/97704.jpg",
      large: "https://api-cdn.myanimelist.net/images/anime/1770/97704l.jpg",
    },
  },
  {
    id: 4155,
    title: "One Piece Film: Strong World",
    main_picture: {
      medium: "https://api-cdn.myanimelist.net/images/anime/1192/116784.jpg",
      large: "https://api-cdn.myanimelist.net/images/anime/1192/116784l.jpg",
    },
  },
];

app.get("/anime", async (req, res) => {
  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: "https://api.myanimelist.net/v2/anime?q=one&limit=4",
  //       headers: {
  //         "X-MAL-CLIENT-ID": MY_KEY,
  //       },
  //     });
  //     const data = await response.data.data;
  //     const animes = [];
  //     for (let i = 0; i < data.length; i++) {
  //       animes.push(data[i].node);
  //     }
  res.status(200).json(animes);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
});

app.listen(9001, () => {
  console.log("Server at port 9001");
});
