const express = require("express")
const router = express.Router()
const URLS = require("./urls")


router.get("/:startIdx", (req, res) => {
    // console.log("MADE IT TO ROUTER")
    let startIdx = req.params.startIdx;
    let nextBatch = URLS.slice(startIdx, startIdx + 10)
    return res.json({nextUrls: nextBatch})
})








module.exports = router;
