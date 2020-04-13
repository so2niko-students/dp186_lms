const express = require("express");

const app = express();

// app.get("/", (req, res) => res.send("Hi"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is started on the PORT ${PORT}`));
