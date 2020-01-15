import { URLS } from "./urls"
const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.json({msg: "This is the image route"})
})


router.get("/:startIdx", (req, res) => {
    console.log("MADE IT TO ROUTER")
    let startIdx = req.params.startIdx;
    let nextBatch = URLS.slice(startIdx, startIdx + 9)
    return res.json({nextUrls: nextBatch})
})

module.exports = router;
