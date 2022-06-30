const express = require("express");
const app = express();
  
app.get("/apis", (req, res) => {
  console.log("Connected to React");
});
  
const PORT = process.env.PORT || 5500;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));