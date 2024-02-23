import express from "express";
var app = express();
app.get("/ads", function (request, response) {
    return response.json([
        {
            id: 1,
            title: "ads",
            description: "ads",
            price: 100,
        },
    ]);
});
app.listen(3333);
