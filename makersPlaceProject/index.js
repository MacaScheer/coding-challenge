const express = require("express")
const app = express();
const images = require("./routes/api/images")

app.use("/api/images", images);
    
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})





