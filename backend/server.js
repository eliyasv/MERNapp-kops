const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://db:27017/mern",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));

app.get("/api/items", async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post("/api/items", async (req, res) => {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.status(201).json(item);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
