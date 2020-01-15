const express = require("express")
const app = express();
const images = require("./routes/api/images")
// app.get("/", (req, res) => {
//     res.send("Hello World!")
    
// })

app.use("/api/images", images);
    
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})


//     client=
//   redux / images 
// entities: {
//         images: []     
// }
// let currenetNumOfUrls = entities.images.length() 
  
// // num = currentNumOfUrls
// let fetchXAmount(num) => {
//   axios.get(num)    
// }

// app.use("/queryimages", xys => (req, res) {
//   let beginningIndex     
//   let endingIndex
//   let returnValue
//     beginningIndex = req.body.currentNumOfUrls 
//     endingIndex = beginningIndex + 9
//     returnValue = listUrls[beginningIndex..endingIndex]
//     return res.json({urls: return value})
  
// }




