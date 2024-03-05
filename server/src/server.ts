import express from "express";

const app = express();

app.get("/games", (request, response) => {
  return response.json([])
})

app.post("/ads", (request, response) => {
  return response.status(201).json([])
})

app.get("/games/:id/ads", (request, response) => {

  // const gameId = request.params.id


  return response.json([
    {
      id: 1,
      title: "ads",
      description: "ads",
      price: 100,
    },
    {
      id: 2,
      title: "ads",
      description: "ads",
      price: 200,
    },
    {
      id: 3,
      title: "ads",
      description: "ads",
      price: 300,
    },
    {
      id: 4,
    }
  ]);
});


app.get("/ads/:id/discord", (request, response) => {

 // const adId = request.params.id

  return response.json([]);
});

app.listen(3333);
