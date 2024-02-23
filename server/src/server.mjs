import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 1,
      title: "ads",
      description: "ads",
      price: 100,
      id: 2,
    },
  ]);
});

app.listen(3333);
