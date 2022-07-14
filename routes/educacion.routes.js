const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    res.send("api de educacion")
});

module.exports = router;